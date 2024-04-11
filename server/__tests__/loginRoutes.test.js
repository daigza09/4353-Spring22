const request = require('supertest');
const app = require('../../server');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('POST /login', () => {
  test('should login with hardcoded credentials', async () => {
    const userData = {
      email: 'joydoe@example.com',
      password: 'password1234',
    };

    const user = await User.findOne({ email: userData.email });
    console.log('User:', user); 

    const isMatch = await bcrypt.compare(userData.password, user.password);
    console.log('isMatch:', isMatch); 

    if (!isMatch) {
      console.log('Password mismatch'); 
      throw new Error('Password mismatch');
    }

    const response = await request(app)
      .post('/login')
      .send(userData)
      .set('Accept', 'application/json');

    console.log('Response:', response.body); 

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });

  test('should return 401 if user is not found', async () => {
    const userData = {
      email: 'nonexistent@example.com',
      password: 'somepassword',
    };

    const response = await request(app)
      .post('/login')
      .send(userData)
      .set('Accept', 'application/json');

    console.log('Response:', response.body); 

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('User not found');
  });
});



describe('/auth', () => {
    let accessToken;
    let refreshToken;

    beforeAll(async () => {
        const loginResponse = await request(app)
            .post('/login')
            .send({
                email: 'joydoe@example.com',
                password: 'password1234'
            })
            .set('Accept', 'application/json');

        accessToken = loginResponse.body.accessToken;
        refreshToken = loginResponse.body.refreshToken;
    });

    test('auth should return 401 when no token is provided', async () => {
        const response = await request(app)
            .get('/auth')
            .set('Accept', 'application/json');

        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Authorization header is missing');
    });

    test('auth should return 403 when an invalid token is provided', async () => {
        const response = await request(app)
            .get('/auth')
            .set('Authorization', 'Bearer invalidtoken')
            .set('Accept', 'application/json');

        expect(response.status).toBe(403);
        expect(response.body.error).toBe('Invalid token');
    });

    test('auth should return 200 and user ID when a valid token is provided', async () => {
        const response = await request(app)
            .get('/auth')
            .set('Authorization', `Bearer ${accessToken}`)
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.message).toMatch(/^User with ID .* accessed the protected route$/);
    });

    test('refresh should return 401 when no refresh token is provided', async () => {
        const response = await request(app)
            .post('/refresh')
            .set('Accept', 'application/json');

        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Refresh token is missing');
    });

    test('refresh should return 403 when an invalid refresh token is provided', async () => {
        const response = await request(app)
            .post('/refresh')
            .send({ refreshToken: 'invalidtoken' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(403);
        expect(response.body.error).toBe('Invalid refresh token');
    });

    test('refresh should return 200 and new access token when a valid refresh token is provided', async () => {
        const response = await request(app)
            .post('/refresh')
            .send({ refreshToken })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.accessToken).toBeDefined();
        const decoded = jwt.decode(response.body.accessToken);
        expect(decoded.userId).toBeDefined();
    });
});
