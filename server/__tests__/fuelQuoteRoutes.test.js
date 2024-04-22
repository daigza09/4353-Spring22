const request = require('supertest');
const app = require('../server'); // Assuming your Express app instance is exported from 'server.js'
const HistoryData = require('../models/History'); // Assuming the HistoryData model is defined in 'models/History.js'

describe('POST /history', () => {
  test('should create a new fuel form', async () => {
    const mockReqBody = {
      email: 'ginaplatt@gmail.com',
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
  test('should get all orders', async () => {
    const mockOrders = [
      {
        _id: 'mockId1',
        email: 'johndoe@example.com',
        fuelType: 'Gasoline',
        numGallons: 10,
        purchaseDate: '2024-03-28',
        deliveryDate: '2024-03-29',
        total: 50,
      },
      {
        _id: 'mockId2',
        email: 'janedoe@example.com',
        fuelType: 'Diesel',
        numGallons: 15,
        purchaseDate: '2024-03-25',
        deliveryDate: '2024-03-26',
        total: 75,
      },
    ];

    // Mock the HistoryData find method to resolve with mockOrders
    HistoryData.find = jest.fn().mockResolvedValue(mockOrders);

    // Make a GET request to '/history'
    const res = await request(app)
      .get('/history')
      .expect('Content-Type', /json/)
      .expect(200); // Assuming 200 is the expected status code for a successful response

    // Assert that the response body matches mockOrders
    expect(res.body).toEqual(mockOrders);
  });
});

describe('GET /history', () => {
    test('should handle errors during fetching orders', async () => {
      // Mocking the HistoryData.find() method to throw an error
      HistoryData.find = jest.fn().mockRejectedValue(new Error('Mock error'));
  
      // Make a GET request to '/history'
      const res = await request(app)
        .get('/history')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500); // Expecting a 500 status code for the error case
  
      // Assert that the response body contains the expected error message
      expect(res.body).toEqual({ error: 'An error occurred while fetching orders' });
    });
  });