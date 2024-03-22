const request = require('supertest');
const app = require('../../server');
const Signup = require('../models/Signup');

describe('POST /login', () => {
  test('should login with hardcoded credentials', async () => {
    const userData = {
      email: 'joydoe@example.com',
      password: 'password1234',
    };

    const response = await request(app)
      .post('/login')
      .send(userData)
      .set('Accept', 'application/json');

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

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('User not found');
  });
});


