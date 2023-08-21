import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Confirmation(props) {
  const { items, quantities, total } = props.location.state;

  return (
    <div>
      <Nav />
      <div className="min-h-screen">
        <h1 className="p-2 m-2 text-lg font-ubuntu">Order Confirmation</h1>
        <div className="p-5">
          <h2 className="text-xl font-medium mb-4">Thank you for your purchase!</h2>
          <h3 className="text-lg font-medium mb-2">Order Details:</h3>
          <ul className="list-disc list-inside mb-4">
            {items.map((item, index) => (
              <li key={index}>
                {item.productName} - {quantities[index]} x ${item.pricePerItem} = ${item.pricePerItem * quantities[index]}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mb-0 items-center px-4 py-2">
            <p className="font-medium">Total:</p>
            <p className="font-medium">${total}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Confirmation;
