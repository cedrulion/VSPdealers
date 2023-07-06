import React from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import order from "../Assets/order.png"

function Pay(props) {
  const location = useLocation(props);
  const items = location.state.items;
  const quantities = location.state.quantities;
  const total = location.state.total;

  return (
    <div>
      <HomeNav />
      <div className="min-h-screen py-4">
        <div className="flex flex-col items-center gap-3 mb-4">
          <p className="font-medium">Total amount</p>
          <p className="font-medium text-3xl">{total} Rwf</p>
          <h1 className='font-medium text-xl'> Transaction ID: 123456</h1>
        </div>
        <img src={order} alt="" className=" ml-32 w-64 absolute"/>
        <form className="flex flex-col items-center justify-center">
  <input
    className="p-2 w-64 rounded-full border border-gray-700 h-9 font-Ubuntu mb-4"
    placeholder="Names"
    name="name"
  />
  <input
    className="p-2 w-64 rounded-full border border-gray-700 h-9 font-Ubuntu mb-4"
    placeholder="Phone number"
  />
  <input
    className="p-2 w-64 rounded-full border border-gray-700 h-9 font-Ubuntu mb-4"
    placeholder="Means of payment"
  />

  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-16 rounded-full">
    Pay
  </button>
</form>
      </div>
      <Footer />
    </div>
  );
}

export default Pay;
