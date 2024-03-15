// Import necessary modules and functions
const { makeOrder } = require('./quoteController');
const FuelQuote = require('../models/FuelQuote');

// Describe block for the test suite
describe('Filling out fuel form', () => {
  // Test case for filling out the fuel form and checking for errors
  it('Should receive fuel quote form and throw an error when not all units are filled out', async () => {
    // Mock request object with sample data
    const mockRequest = {
      body: {
        gasLocation: '01-TX',
        fuelType: 'Gasoline',
        numGallons: '1000',
        purchaseDate: '2024-03-13',
        pricePerGallon: '2.50',
        deliveryDate: '2024-03-14',
        deliveryAddress: '123 Address Ln',
        total: '2500',
      },
    };

    // Mock response object with Jest mock functions
    const mockResponse = {
      status: jest.fn(() => mockResponse),
      json: jest.fn(),
    };

    // Mock asyncHandler middleware for testing
    const mockAsyncHandler = fn => (req, res, next) => {
      Promise.resolve()
        .then(() => fn(req, res, next))
        .catch(next);
    };

    // Mock makeOrder function using asyncHandler
    const makeOrderMock = mockAsyncHandler(makeOrder);

    // Call the mocked makeOrder function with mockRequest and mockResponse
    await makeOrderMock(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'Order created successfully',
    order: expect.any(Object), // Assuming order object is returned in the response
    });

// Mock an error during order creation to test error handling
    const mockError = new Error('Sample error message'); // Create a mock error with a custom message
    await makeOrderMock({ body: {} }, mockResponse); // Passing an empty body to trigger an error

    // Assert that the response status and JSON methods were called with expected values for error handling
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
    error: 'An error occurred while creating the order',
    });

    // Assert that the response status and JSON methods were called with expected values
    //expect(mockResponse.status).toHaveBeenCalledWith(201);
    /*expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Order created successfully',
      order: expect.any(Object),
    });*/

    // Mock FuelQuote.findOne method if required for testing database interaction
    //expect(FuelQuote.findOne).toHaveBeenCalled();
  });
});
