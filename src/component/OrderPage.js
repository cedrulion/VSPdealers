import React, { useState } from 'react';

const orders = [
  { id: 1, name: 'Order 1', phone:777755, status: 'Delivered' },
  { id: 2, name: 'Order 2', phone:777755, status: 'shipped' },
  { id: 3, name: 'Order 3', phone:777755, status: 'Cancelled' },
];

const OrderPage = () => {
  const [orderList, setOrderList] = useState(orders);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orderList.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrderList(updatedOrders);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order Page</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone number</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.name}</td>
              <td className="border px-4 py-2">{order.phone}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                {order.status !== 'Shipped' && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Shipped')}
                  >
                    Shipped
                  </button>
                )}
                {order.status !== 'Delivered' && (
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Delivered')}
                  >
                    Delivered
                  </button>
                )}
                {order.status !== 'Cancelled' && (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Cancelled')}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
