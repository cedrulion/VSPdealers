import React, { useState } from 'react';
import { FiEdit, FiCheck } from 'react-icons/fi';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function OrderInfo(props) {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    province: '',
    district: '',
    sector: ''
  });
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];

  const location = useLocation(props);
  const quantities = location.state.quantities;
  const total = location.state.total;

  const handleOrder = () => {
    if (!shippingAddress.province || !shippingAddress.district || !shippingAddress.sector) {
      console.error('Shipping address is incomplete');
      return;
    }

    const orderData = {
      products: items.map((item, index) => ({
        productId: item._id,
        quantity: quantities[index]
      })),
      shippingAddress: { ...shippingAddress }
    };

    const token = localStorage.getItem('Token');

    axios.post('https://vspdealers-api.onrender.com/api/v1/orders/placeOrder', orderData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        alert('Order placed successfully!');
        navigate('/TrackingOrder', { state: { items, quantities, total } });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    navigate('/cartitem');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  return (
    <div classname="">
      <HomeNav />
      <div className='min-h-screen bg-slate-50'>
      <div className="flex  text-2xl justify-center gap-20">
        <div className="w-96 mt-9 p-8 bg-gray-200 rounded-lg shadow-lg">
          <h2 className="font-medium">Order Summary</h2>
          <div className="py-5">
            <h1 className="text-red-500">List of items</h1>
            {items?.map((item, index) => (
              <div className="flex gap-6 items-center mb-4" key={index}>
                <h3 className="font-medium">{item.productName}</h3>
                <p>{item.pricePerItem * quantities[index]} Rwf</p>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="justify-start mb-4 items-center py-11">
                <p className="font-medium">Total amount</p>
                <p className="font-medium text-red-700 text-3xl">{total} Rwf</p>
              </div>
            </div>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full items-center"
                onClick={handleEdit}
              >
                <FiEdit className="mr-2" /> Edit
              </button>
            
          </div>
        </div>
        <div className="mt-12">
                <h2 className="font-medium">Shipping Address</h2>
                <div className="flex flex-col mt-4">
                  <label htmlFor="province" className="font-medium mb-2">
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    placeholder='enter a province'
                    name="province"
                    value={shippingAddress.province}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="district" className="font-medium mb-2">
                    District
                  </label>
                  <input
                    type="text"
                    id="district"
                    placeholder='enter a district'
                    name="district"
                    value={shippingAddress.district}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="sector" className="font-medium mb-2">
                    Sector
                  </label>
                  <input
                    type="text"
                    id="sector"
                    placeholder='enter a sector'
                    name="sector"
                    value={shippingAddress.sector}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2"
                  />
                </div>
                
              
              <button
                className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full items-center ml-4"
                onClick={handleOrder}
              >
                <FiCheck className="flex mx-auto" /> 
                <h1>Confirm and place order</h1>
              </button>
             
              </div>
              
      </div>
   
             </div>
      <Footer />
    </div>
  );
}

export default OrderInfo;
