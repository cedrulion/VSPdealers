import React from 'react';
import { FaCheckCircle, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import HomeNav from './HomeNav';
import Footer from './Footer';

const TrackingOrder = () => {
  const steps = [
    { title: 'Order Placed', icon: <FaCheckCircle />, completed: true },
    { title: 'Order En Route', icon: <FaTruck />, completed: true },
    { title: 'Order Delivered', icon: <FaMapMarkerAlt />, completed: false },
  ];

  return (
<div>
 <HomeNav />
    <div className="container h-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tracking Order</h1>

      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div
              className={`h-12 w-12 rounded-full mx-auto mb-2 ${
                step.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              {step.icon}
            </div>
            <p className={`${step.completed ? 'font-bold' : 'font-normal'}`}>
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
<Footer/>
</div>
  );
};

export default TrackingOrder;
