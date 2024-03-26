const request = require('supertest');
const app = require('../../server'); 
const Signup = require('../models/Signup'); 


beforeEach(async () => {

  await Signup.deleteMany({ email: 'test@example.com' });
});

describe('POST /signup', () => {
  test('should create a new user successfully', async () => {
    const userData = {
      email: 'test@example.com', 
      password: 'password123',
      fullName: 'John Doe',
      addressLine1: '123 Main St',
      addressLine2: 'Apt 101',
      city: 'Houston',
      state: '01 - TX',
      zipcode: '77001',
    };

    const response = await request(app)
      .post('/signup')
      .send(userData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Signup successful');

    const savedUser = await Signup.findOne({ email: 'test@example.com' });
    expect(savedUser).toBeTruthy();

    await Signup.deleteOne({ email: 'test@example.com' });
  });

  test('should return 400 if required fields are missing', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/signup')
      .send(userData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Please provide all required fields (email, password, fullName, addressLine1, city, state, zipcode)');
  });

  
  test('should return 400 if email already exists', async () => {
    await Signup.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Jane Doe',
      addressLine1: '456 Elm St',
      city: 'Houston',
      state: '01 - TX',
      zipcode: '77001',
    });

    const userData = {
      email: 'test@example.com',
      password: 'password123',
      fullName: 'John Doe',
      addressLine1: '123 Main St',
      city: 'Houston',
      state: '01 - TX',
      zipcode: '77001',
    };

    const response = await request(app)
      .post('/signup')
      .send(userData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Email already exists');

    await Signup.deleteOne({ email: 'test@example.com' });
  });

});



describe('GET /signup/:id', () => {
  test('should retrieve user details by ID', async () => {

    const newUser = await Signup.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'John Doe',
      addressLine1: '123 Main St',
      city: 'Houston',
      state: '01 - TX',
      zipcode: '77001',
    });

    const userId = newUser._id;

    const response = await request(app)
      .get(`/signup/${userId}`) 
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);

    expect(response.body.fullName).toBe('John Doe');
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.addressLine1).toBe('123 Main St');

    await Signup.deleteOne({ _id: userId });
  });

  test('should return 404 if user ID is not found', async () => {
    const nonExistentUserId = '605ff7fd3b0b3442a46e788c'; 

    const response = await request(app)
      .get(`/signup/${nonExistentUserId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('User not found');
  });
});



