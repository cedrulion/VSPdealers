import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';
import Footer from './Footer';

function CartItems() {
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [quantities, setQuantities] = useState(items.map(() => 1));
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDelete = (index) => {
    items.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(items));
    setQuantities(quantities.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities(quantities.map((quantity, i) => (i === index ? newQuantity : quantity)));
  };

  const calculateTotal = () =>
    items.reduce((total, item, i) => total + item.pricePerItem * quantities[i], 0);

  const handleProceedToCheckout = () => {
    navigate('/OrderInfo',{state: {items, quantities,total:calculateTotal()}}); // Use the navigate function to go to the OrderInfo page
  };

  return (
    <div>
      <HomeNav />
      <div className="min-h-screen m-9">
        <h1 className="p-2 m-2 text-lg font-ubuntu">Cart</h1>
        <div className="p-5">
          {items.map((item, index) => (
            <div className="flex justify-between items-center mb-4" key={index}>
                
              {/* <div>
                
    <img src={item.image} alt='product' className='max-h-24' /> Adjust the max-height of the image
  </div> */}
  <div className='flex justify-between gap-6'>
                <h2 className="font-medium">{item.productName}</h2>
                <p>{item.pricePerItem}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  onClick={() => handleQuantityChange(index, Math.max(quantities[index] - 1, 1))}
                >
                  -
                </button>
                <span className="px-4">{quantities[index]}</span>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={() => handleQuantityChange(index, quantities[index] + 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-600 hover:text-red-800 font-medium"
                  onClick={() => handleDelete(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
         
         <div className='bg-gray-200 mx-auto p-3 w-1/2 rounded-full' >
          <div className="flex gap-3 justify-center mb-0 items-center px-4 py-2">
            <p className='font-medium'>Your order: Total price of the goods</p>
            <p className="font-medium">Total:</p>
            <p className="font-medium">${calculateTotal()}</p>
          </div>
          
          <div className="flex px-4 py-2 justify-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full items-center"
              onClick={handleProceedToCheckout} // Add the onClick event handler for the "proceed to Checkout" button
            >
              proceed to Checkout
            </button>
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartItems;
