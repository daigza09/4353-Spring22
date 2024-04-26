const request = require('supertest');
const app = require('../server'); // Assuming your Express app instance is exported from 'server.js'
const HistoryData = require('../models/History'); // Assuming the HistoryData model is defined in 'models/History.js'
const { MongoClient } = require('mongodb');
const { getAllOrdersTest } = require('../controllers/fuelQuoteController'); // Assuming your controller file is named 'orders.js'
jest.mock('mongodb');


describe('POST /history', () => {
  test('should create a new fuel form', async () => {
    const mockReqBody = {
      email: 'test@example.com',
      fuelType: 'Gasoline',
      numGallons: 10,
      purchaseDate: '2024-03-28',
      deliveryDate: '2024-03-29',
      total: 50,
    };

    // Mock the HistoryData save method to resolve
    HistoryData.prototype.save = jest.fn().mockResolvedValue(mockReqBody);

    // Make a POST request to '/history' with mockReqBody
    const res = await request(app)
      .post('/history/createHistory')
      .send(mockReqBody)
      .expect('Content-Type', /json/)
      .expect(201); // Assuming 201 is the expected status code for a successful creation

    // Assert that the response body contains the expected message
    expect(res.body.message).toBe('Order created successfully-REEM');
    // Optionally, you can assert other properties of the response body if needed
  });
});

describe('GET /history', () => {
  test('should get all orders for a specific email', async () => {
    const mockEmail = 'test@example.com';
    
    // Create a mock request object with query parameters
    const mockReq = { query: { email: mockEmail } };

    // Create a mock response object with a json function
    const mockJson = jest.fn();
    const mockRes = { json: mockJson };

    // Call the controller function with the mock request and response objects
    await getAllOrdersTest(mockReq, mockRes);

    // Assert that the response json function was called with the correct data
    // You can add your assertions here based on the expected behavior of getAllOrdersTest
    // For example, checking that mockJson was called with the expected data
    expect(mockJson).toHaveBeenCalledWith([
      {
        _id: '1',
        email: 'test@example.com',
        fuelType: 'Gasoline',
        numGallons: 10,
        purchaseDate: '2024-03-28',
        deliveryDate: '2024-03-29',
        total: 50,
      },
      {
        _id: '2',
        email: 'test@example.com',
        fuelType: 'Diesel',
        numGallons: 15,
        purchaseDate: '2024-03-25',
        deliveryDate: '2024-03-26',
        total: 75,
      }
    ]);
  });
});


describe('GET /history', () => {
  test('should handle empty response when fetching orders for a specific email', async () => {
    const mockEmail = 'test@example.com';

    // Mocking the HistoryData.find() method to resolve with an empty array
    HistoryData.find = jest.fn().mockResolvedValue([]);

    // Make a GET request to '/history' with the email query parameter
    const res = await request(app)
      .get(`/history?email=${mockEmail}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500); // Expecting a 500 status code

    // Assert that the response body is an empty array
    expect(res.body).toEqual({ error: 'An error occurred while fetching orders' });
  });
});