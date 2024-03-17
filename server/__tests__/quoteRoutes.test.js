const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server'); // Assuming your Express app instance is exported from 'server.js'
const FuelQuote = require('../models/FuelQuote'); // Assuming the FuelQuote model is defined in 'models/FuelQuote.js'

// Mock MongoDB connection
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /fuelForm', () => {
  test('should create a new order successfully', async () => {
    const orderData = {
      gasLocation: '02-FL',
      fuelType: 'Gasoline',
      numGallons: '1000',
      purchaseDate: '2024-03-13',
      pricePerGallon: 2.79,
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
    expect(savedOrder.fuelType).toBe('Gasoline');

    await FuelQuote.deleteOne({ gasLocation: '02-FL' });
  });
});
