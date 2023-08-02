import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://vspdealers.onrender.com/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.patch(
        `https://vspdealers.onrender.com/api/v1/orders/${orderId}/changeStatus`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      // Check if the status change was successful
      if (response.status === 200 && response.data?.data?.getOrder) {
        // Update the order status in the state
        const updatedOrder = response.data.data.getOrder;
        setOrders((prevOrders) => prevOrders.map((order) => (order._id === updatedOrder._id ? updatedOrder : order)));
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      // Handle errors, show error message, or any other error handling
    }
  };

  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const currentOrders = orders.slice(firstOrderIndex, lastOrderIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="border py-2 px-3 text-left">Order ID</th>
              <th className="border py-2 px-3 text-left">User</th>
              <th className="border py-2 px-3 text-left">Status</th>
              <th className="border py-2 px-3 text-left">Amount</th>
              <th className="border py-2 px-3 text-left">Placed At</th>
              <th className="border py-2 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order._id}>
                <td className="border py-2 px-3">{order._id}</td>
                <td className="border py-2 px-3">
                  {order.userId ? `${order.userId.firstName} ${order.userId.lastName}` : 'Guest'}
                </td>
                <td className="border py-2 px-3">{order.status}</td>
                <td className="border py-2 px-3">{order.amount} Rwf</td>
                <td className="border py-2 px-3">{new Date(Number(order.placedAt)).toLocaleString()}</td>
                <td className="border py-2 px-3">
                  {order.status === 'pending' ? (
                    <button
                      onClick={() => handleStatusChange(order._id, 'Delivered')}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Mark as Delivered
                    </button>
                  ) : order.status === 'Delivered' ? (
                    <button
                      onClick={() => handleStatusChange(order._id, 'Shipped')}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Mark as Shipped
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'
            } font-bold py-2 px-4 rounded mr-2`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentOrders.length < ordersPerPage}
            className={`${
              currentOrders.length < ordersPerPage ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'
            } font-bold py-2 px-4 rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
