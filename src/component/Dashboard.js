import React from 'react';
import stat from '../Assets/stat.gif';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">E-commerce Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-200 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">1,234</p>
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
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">$100.00</td>
              <td className="border px-4 py-2">Shipped</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">$200.00</td>
              <td className="border px-4 py-2">Delivered</td>
            </tr>
            {/* Add more rows for additional orders */}
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
