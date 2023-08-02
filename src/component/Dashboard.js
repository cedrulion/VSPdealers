import React, { useState, useEffect } from 'react';
import axios from 'axios';
import stat from '../Assets/stat.gif';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://vspdealers.onrender.com/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Check if the response is successful and has orders data
      if (response.status === 200 && response.data?.data?.getAllOrders) {
        // Access the orders array from the response and set it in the state
        const ordersData = response.data?.data?.getAllOrders || [];
        setOrders(ordersData);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      // Handle errors, show error message, or any other error handling
    }
  };

  const latestOrders = orders.slice(0, 3); // Display only the latest 3 orders
  const totalOrders = orders.length; // Total number of orders

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">E-commerce Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-200 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>

        <div className="p-4 bg-yellow-200 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Revenue</h2>
           <p className="text-3xl font-bold">$12,345</p>
         </div>

        <div className="p-4 bg-green-200 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
         <p className="text-3xl font-bold">567</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {latestOrders.map((order) => (
              <tr key={order._id}>
                <td className="border px-4 py-2">{order._id}</td>
                <td className="border px-4 py-2">
                  {order.userId ? `${order.userId.firstName} ${order.userId.lastName}` : 'Guest'}
                </td>
                <td className="border px-4 py-2">{`${order.amount} Rwf`}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Sales Statistics</h2>
        <img src={stat} alt="Sales Statistics" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Dashboard;
