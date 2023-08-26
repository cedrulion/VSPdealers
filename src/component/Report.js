import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import Hyundai from "../Assets/Hyundai.png"

const Report = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
 

  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetchOrders();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://vspdealers-api.onrender.com/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200 && response.data?.data?.getAllOrders) {
        const ordersData = response.data?.data?.getAllOrders || [];
        setOrders(ordersData);
          // Calculate total revenue
      const totalRevenueAmount = ordersData.reduce((total, order) => total + order.amount, 0);
      setTotalRevenue(totalRevenueAmount);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

    const fetchUsers = async () => {
        try {
          const token = localStorage.getItem('Token');
          const response = await axios.get('https://vspdealers-api.onrender.com/api/v1/users', {
            headers: {
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          const userData = response.data?.data?.allUsers || [];
          setUsers(userData);
        } catch (error) {
          console.error('Error retrieving users:', error);
        }
      };



  const calculateMostOrderedProduct = () => {
    const productCountMap = {};
  
    orders.forEach(order => {
      if (order.products && Array.isArray(order.products)) {
        order.products.forEach(item => {
          if (!item.productId) return; // Skip if the productId is missing
          if (!productCountMap[item.productId.productName]) {
            productCountMap[item.productId.productName] = item.quantity;
          } else {
            productCountMap[item.productId.productName] += item.quantity;
          }
        });
      }
    });
  
    let mostOrderedProduct = { productName: '', orderCount: 0 };
  
    for (const productName in productCountMap) {
      if (productCountMap[productName] > mostOrderedProduct.orderCount) {
        mostOrderedProduct = {
          productName,
          orderCount: productCountMap[productName]
        };
      }
    }
  
    return mostOrderedProduct;
  };
  

  const mostOrderedProduct = calculateMostOrderedProduct();

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Hyundai Vehicle Spare Parts Daily Report', 10, 15);
    doc.addImage(Hyundai, 'PNG', 160, 10, 30, 30);

    doc.setFontSize(14);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 30);

    doc.setFontSize(12);
    doc.text(`Daily Revenue: ${totalRevenue} Rwf`, 10, 50);
    doc.text(`Most Ordered Product: ${mostOrderedProduct.productName}`, 10, 65);
    doc.text(`Our clients: ${users.length}`, 10, 80);

    doc.save('daily-report.pdf');
  };

  return (
    <div className='text-3xl '>
      <div className="mt-8 text-center ">
        <button
          className="bg-red-300 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          <AiOutlineDownload className="mx-auto text-3xl" />
          Download PDF
        </button>
      </div>
      <div className="mt-12 text-center ">
  <h2 className="text-2xl font-semibold mb-4">Hyundai Vehicle Spare Parts Daily Report</h2>
  <div className="mt-3 flex items-center justify-center">
    <img src={Hyundai} alt="Hyundai Logo" className="flex  h-20 " />
    
  </div>
  <div>
  <p className='mt-6'>Date: {new Date().toLocaleDateString()}</p>
  <p className="mt-3"><h1 className='font-bold'>Daily Revenue:</h1>  {totalRevenue} Rwf</p>
  <p className="mt-3">
   <h1 className='font-bold'> Most Ordered Product:</h1> {mostOrderedProduct.productName} ({mostOrderedProduct.orderCount} times)
  </p>
  <p className="mt-3"><h1 className='font-bold'>Our Clients:</h1>  {users.length}</p>
  </div>
</div>
</div>
  );
};

export default Report;
