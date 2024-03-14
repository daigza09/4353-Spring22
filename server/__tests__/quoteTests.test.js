const request = require('supertest');
const app  = require('./controllers/quoteController');
const { getOrder, makeOrder} = require('../controllers/quoteController');

describe('Fuel Quote Form', () => {
  // Test when received gallons match expected values
  it('Post /fuelquote - Successful Quote', async () => {
      const res = await request(app)
          .post('/fuelquote')
          .send({
              gasLocation: '01-TX',
              fuelType: 'Gasoline',
              numGallons: '1000',
              purchaseDate: '2024-03-13',
              pricePerGallon: '2.50',
              deliveryDate: '2024-03-14',
              deliveryAddress: '123 Address Ln',
              total: '2500'
          });
      expect(res.statusCode).toBe(200);
      expect(res.text).toMatch('Quote Successful');
  });

  // Test when received gallons do not match expected values
  it('Post /fuelquote - Unsuccessful Quote', async () => {
      const res = await request(app)
          .post('/fuelquote')
          .send({
              gasLocation: '02-FL',
              fuelType: 'Diesel',
              numGallons: '500',
              purchaseDate: '2024-03-13',
              pricePerGallon: '3.00',
              deliveryDate: '2024-03-14',
              deliveryAddress: '456 Another Address Ln',
              total: '1500'
          });
      expect(res.statusCode).toBe(401);
      expect(res.text).toMatch('Quote Unsuccessful');
  });

  // Add more test cases as needed to cover other scenarios
});
