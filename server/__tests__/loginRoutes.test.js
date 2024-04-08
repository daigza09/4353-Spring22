const request = require('supertest');
const app = require('../../server');
const bcrypt = require('bcrypt');
const User = require('../models/User');

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
