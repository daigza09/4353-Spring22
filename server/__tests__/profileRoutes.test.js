const supertest = require('supertest');
const app = require('../server'); 
const User = require('../models/ClientProfile'); 

  // Create a user before running tests
  beforeAll(async () => {
    const user = new User({
      fullName: 'Test User',
      email: 'test@example.com',
      address1: '123 Test St',
      address2: 'Apt 1',
      zipcodeNumber: '12345',
      city: 'Test City',
      userLocation: 'TX-1',
    });
    await user.save();
  });

  // getUserProfileByEmail2 
  it('should get a user profile by email', async () => {
    const response = await supertest(app).post('/profileManagement/api/users/getByEmail').send({
      email: 'test@example.com',
    });
    expect(response.status).toBe(200);
    expect(response.body.email).toBe('test@example.com');
  });

  // updateUserProfile 
  it('should update a user profile', async () => {
    const response = await supertest(app).put('/profileManagement/api/users/test@example.com').send({
      fullName: 'Updated Test User',
    });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User updated');
  });

  // Clean up the database after tests
  afterAll(async () => {
    await User.deleteMany({});
  });