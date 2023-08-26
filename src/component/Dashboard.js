import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AiOutlineDownload } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { BsClipboardData } from 'react-icons/bs';
import { FaMoneyBillWave , FaUsers} from 'react-icons/fa';
import Chart from 'chart.js/auto';

const Dashboard = () => {
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

  const latestOrders = orders.slice(0, 5);
  const totalOrders = orders.length;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
  return (
    <div> 
    {/* <div className="mt-8">
    <button
      className="bg-red-300 text-white px-4 py-2 rounded"
      onClick={handlePrint}
    >
       <AiOutlineDownload className="mx-auto text-3xl" />
      Download PDF
    </button>
  </div> */}
    <div className="container mx-auto p-4"  ref={componentRef}>
      <h1 className="text-2xl font-bold mb-4 text-blue-600">HYUNDAI VEHICLE SPARE PARTS DASHBOARD</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-200 rounded shadow">
        
          <BsClipboardData className="text-3xl" />
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>
        
        <div className="p-4 bg-yellow-200 rounded shadow">
        <FaMoneyBillWave className="text-3xl mr-2" />
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">{totalRevenue} Rwf</p>
        </div>

        <div className="p-4 bg-green-200 rounded shadow">
        <FaUsers className="text-3xl mr-2" />
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
         <div className="p-4 bg-purple-200 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Most Ordered Product</h2>
        <p className="text-lg font-semibold">{mostOrderedProduct.productName}</p>
        <p className="text-sm text-gray-600">{`${mostOrderedProduct.orderCount} times ordered`}</p>
      </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>

         <table className="min-w-full bg-white border rounded">
    <thead>
      <tr className="bg-blue-500 text-white">
        <th className="px-4 py-2 text-left">PLACED AT</th>
        <th className="px-4 py-2 text-left">Customer</th>
        <th className="px-4 py-2 text-left">Total</th>
        <th className="px-4 py-2 text-left">Status</th>
       </tr>
     </thead>
     <tbody>
       {latestOrders.map((order, index) => (
       <tr key={order._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
          <td className="border px-4 py-2">{new Date(Number(order.placedAt)).toLocaleString()}</td>
          <td className="border px-4 py-2">
            {order.userId ? `${order.userId.firstName} ${order.userId.lastName}` : 'Guest'}
          </td>
          <td className="border px-4 py-2">{`${order.amount} Rwf`}</td>
           <td
  className={`border px-4 py-2 ${
    order.status === 'Shipped'
      ? 'text-blue-600'
      : order.status === 'Delivered'
      ? 'text-green-600'
      : order.status === 'Pending'
      ? 'text-yellow-600'
      : 'text-red-600'
  }`}
>
  {order.status}
</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Sales Statistics</h2>
        <h2 className="text-xl font-semibold mb-4">Weekly Sales</h2>
        <BarChart orders={orders} />
      </div>

      
      

      </div>
    </div>
  );
};

const BarChart = ({ orders }) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    let myChart;

    const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const weeklySales = [0, 0, 0, 0];

    orders.forEach(order => {
      if (order.placedAt && typeof order.placedAt === 'string' && order.amount && typeof order.amount === 'number') {
        const orderWeek = Math.ceil((new Date(parseInt(order.placedAt)).getDate()) / 7) - 1;
        weeklySales[orderWeek] += order.amount;
      }
    });
    console.log('Weekly Sales:', weeklySales);

    const maxSales = Math.max(...weeklySales);
    const gradient = myChartRef.createLinearGradient(0, 0, 0, 50);
    gradient.addColorStop(0, 'rgba(123, 123, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(123, 123, 255, 0.2)');

    myChart = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: weekLabels,
        datasets: [{
          label: 'Weekly Sales',
          data: weeklySales,
          backgroundColor: gradient,
          borderColor: 'rgba(123, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: maxSales + 100 // Add some buffer for better visualization
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [orders]);

  return <canvas ref={chartRef} style={{ height: '100px', weight: '100px' }}/>;
};

export default Dashboard;


