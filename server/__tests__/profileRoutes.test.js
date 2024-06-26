const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

const userData = {
  email: '1234@email.com',
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

  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/login')
      .send({ email: userData.email, password: userData.password })
      .set('Accept', 'application/json');
    token = loginResponse.body.accessToken;
  });

  describe('PUT /profileManagement/api/users/:email', () => {
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
        .put(`/profileManagement/api/users/${userData.email}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedUserData)
        .set('Accept', 'application/json');

      expect(res.status).toBe(201); 
      expect(res.body.message).toBe('User updated');
      expect(res.body.updatedUser.fullName).toBe('Updated Name');
    });

    test('should handle error when updating user profile', async () => {
      const res = await request(app)
        .put(`/profileManagement/api/users/nonexistentemail@example.com`)
        .set('Authorization', `Bearer ${token}`)
        .send({ fullName: 'Nonexistent User' })
        .set('Accept', 'application/json');

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('User not found');
    });
  });

  describe('GET /profileManagement/info', () => {
    test('should return user information', async () => {
      const res = await request(app)
        .get('/profileManagement/info')
        .query({ email: userData.email })
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'application/json');

      expect(res.status).toBe(201);
      expect(res.body.message).toBe('User information retrieved successfully');
      expect(res.body.user.fullName).toBe('Updated Name');
    });

    test('should handle error when retrieving user information', async () => {
      const res = await request(app)
        .get('/profileManagement/info')
        .query({ email: 'nonexistentemail@example.com' })
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'application/json');

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('User not found');
    });
  });
});