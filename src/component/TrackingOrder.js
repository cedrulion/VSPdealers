import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { CheckCircle} from 'react-feather';
import { CloseCircleOutlined } from '@ant-design/icons';

function TrackingOrder() {
  const [orderData, setOrderData] = useState([]);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch the order data from the endpoint
      const response = await axios.get('https://vspdealers.onrender.com/api/v1/orders/myOrders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Access the myOrders array using the data variable
      const data = response.data?.data?.myOrders || [];
      setOrderData(data);
    } catch (error) {
      console.error('Error fetching order data:', error);
      // Handle errors, show error message, or any other error handling
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'Delivered':
        return 'Delivered';
      case 'Shipped':
        return 'Shipped';
      default:
        return 'Unknown';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <CheckCircle className="text-green-500 inline-block" />;
      case 'Delivered':
        return <CheckCircle className="text-blue-500 inline-block" />;
      case 'Shipped':
        return <CloseCircleOutlined className="text-red-500 inline-block" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <HomeNav />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Tracking Order</h2>
        <div className='flex  flex-col-3'>
          {orderData.map((order) => (
            <div key={order._id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
              <p>Status: {getStatusText(order.status)}</p>
              {getStatusIcon(order.status)} 
              <p>Amount: {order.amount} Rwf</p>
              <p>Placed At: {new Date(Number(order.placedAt)).toLocaleString()}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Shipping Address</h4>
                <p>Province: {order.shippingAddress.province}</p>
                <p>District: {order.shippingAddress.district}</p>
                <p>Sector: {order.shippingAddress.sector}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Products</h4>
                {order.products.map((product, index) => (
                  <div key={index} className="border-t border-gray-200 mt-2 pt-2">
                    <p>Product ID: {product.productId ? product.productId._id : 'N/A'}</p>
                    <p>Product Name: {product.productId ?product.productId.productName :'N/A'}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price: {product.price} Rwf</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrackingOrder;
