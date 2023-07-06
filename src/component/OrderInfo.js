import React from 'react';
import { FiEdit, FiCheck } from 'react-icons/fi'; // Example imports of React icons
import HomeNav from './HomeNav';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function OrderInfo(props) {
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];

  const location = useLocation(props);
  const quantities = location.state.quantities;
  const total = location.state.total;

  const handleOrder = () => {
    navigate('/Pay', { state: { items, quantities, total } });
  };

  return (
    <div>
      <HomeNav />
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="font-medium">Order Summary</h2>
          <div className="py-5">
            <h1 className="text-red-500">List of items</h1>
            {items?.map((item, index) => (
              <div className="flex gap-6 items-center mb-4" key={index}>
                <h3 className="font-medium">{item.name}</h3>
                <p>{item.price * quantities[index]} Rwf</p>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="justify-start mb-4 items-center py-11">
                <p className="font-medium">Total amount</p>
                <p className="font-medium text-red-700 text-3xl">{total} Rwf</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-16 rounded-full items-center">
                <FiEdit className="mr-2" /> Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-16 rounded-full items-center ml-4"
                onClick={handleOrder}
              >
                <FiCheck className="mr-2" /> Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderInfo;
