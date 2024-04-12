const supertest = require('supertest');
const app = require('../server'); 
const User = require('../models/User'); 

  // Create a user before running tests
  beforeAll(async () => {
    const user = new User({
      fullName: 'Test User',
      email: 'test123@example.com',
      address1: '123 Test St',
      address2: 'Apt 1',
      zipcodeNumber: '12345',
      city: 'Test City',
      userLocation: 'TX-1',
    });
    await user.save();
  });

  // updateUserProfile 
  it('should update a user profile', async () => {
    const response = await supertest(app).put('/profileManagement/api/users/test@example.com').send({
      fullName: 'Updated Test User',
    });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User updated');
  });
