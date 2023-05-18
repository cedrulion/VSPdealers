import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function OrderInfo(props) {
  // const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  const location=useLocation(props);
  const items=location.state.items
  const quantities=location.state.quantities
  const total=location.state.total
  return (
    <div>
      <Nav />
      <div className=" m-9">
        <div className="py-5 px-5">
          <h2 className="font-medium ">Order Summary</h2>
          <div className='py-5'>
            <h1 className='text-red-500'>List of items</h1>
          {items?.map((item, index) => (
            <div className="flex gap-6 items-center mb-4 " key={index}>
           
                <h3 className="font-medium">{item.name}</h3>
                <p>{item.price*quantities[index]}Rwf</p>
            
           
              </div>
           
          ))}
          <div className='flex justify-between'>
          <div className=" justify-start mb-4 items-center py-11">
            <p className="font-medium">Total amount </p>
            <p className="font-medium text-red-700 text-3xl">{total} Rwf</p>
          </div>
          <div className='mx-auto flex gap-8 items-center py-15'>
          <button
              className="border border-red-600 hover:bg-red-700  font-bold py-2 px-16 rounded-full items-center"
             >
              edit
            </button>
          <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-16 rounded-full items-center"
             >
              Pay
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderInfo;
