const request = require('supertest');
const app = require('../../server'); // Assuming your Express app instance is exported from 'server.js'
const FuelQuote = require('../models/FuelQuote'); // Assuming the FuelQuote model is defined in 'models/FuelQuote.js'

beforeEach(async () => {
  // Clean up any existing data with the same gasLocation before each test
  await FuelQuote.deleteMany({ deliveryAddress: 'temp test' });
});

describe('POST /fuelForm', () => {
  test('should create a new order successfully', async () => {
    const orderData = {
      email: 'temp@gmail.com',
      gasLocation: '02-FL',
      fuelType: 'Diesel',
      numGallons: '1000',
      purchaseDate: '2024-03-13',
      pricePerGallon: 3.14,
      deliveryDate: '2024-03-13',
      deliveryAddress: 'temp test',
      total: '2790.00',
    };

    const response = await request(app)
      .post('/fuelForm')
      .send(orderData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Order created successfully');

    const savedOrder = await FuelQuote.findOne({ gasLocation: '02-FL' });
    expect(savedOrder).toBeTruthy();

    await FuelQuote.deleteOne({ gasLocation: '02-FL' });
  });
});
