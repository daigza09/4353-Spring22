const request = require('supertest');
const app = require('../server'); 
const User = require('../models/User');

// user data for testing
const userData = {
  email: '1234@emailcom',
  password: '123456789!',
  fullName: '1234 company',
  address1: '123 address1',
  address2: '456 address2',
  city: 'Houston',
  state: '01 - TX',
  zipcode: '77078',
};

describe('Profile Management Controller', () => {
  let token; // store the token for authentication

  // before running the tests -> login the user and get the token
  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/login')
      .send({ email: userData.email, password: userData.password })
      .set('Accept', 'application/json');
    token = loginResponse.body.accessToken;
  });

  // updating user profile
  describe('PUT /api/users/:email', () => {
    test('should update user profile', async () => {
      const updatedUserData = {
        fullName: 'Updated Name',
        address1: 'Updated Address 1',
        address2: 'Updated Address 2',
        city: 'Updated City',
        state: 'Updated State',
        zipcode: 'Updated Zipcode',
      };

      const res = await request(app)
        .put(`/api/users/${userData.email}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedUserData)
        .set('Accept', 'application/json')
        .expect(200);

      expect(res.body.message).toBe('User updated');
      expect(res.body.updatedUser.fullName).toBe('Updated Name');
    });
  });

  // getting user information
  describe('GET /info', () => {
    test('should return user information', async () => {
      const res = await request(app)
        .get('/info')
        .query({ email: userData.email })
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'application/json')
        .expect(200);

      expect(res.body.message).toBe('User information retrieved successfully');
      expect(res.body.user.fullName).toBe('Updated Name');
    });
  });

});

