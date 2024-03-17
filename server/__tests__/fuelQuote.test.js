const formData = {
    gasLocation: '03-NY',
    fuelType: 'Gasoline',
    numGallons: 999.9,
    purchaseDate: new Date('2024-03-15'),
    pricePerGallon: 2.79,
    deliveryDate: new Date('2024-03-14'),
    deliveryAddress: '1234, road temp, houston, tx 77089',
    total: 2789.72
  };
  
  test('testing registering a fuel order', async () =>{
      try{
          const res = await axios.post('http://localhost:8080/fuelForm/', formData);
          if (res.status !== 201) {
              throw new Error("Unable to complete order");
          }
          const data = await res.data;
          console.log(data);
          return { success: true, data };
      } catch (error) {
          console.error("Error registering order:", error);
          return { success: false, error };
      }
  });  