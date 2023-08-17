import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useReactToPrint } from 'react-to-print';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetchOrders();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://vspdealers.onrender.com/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200 && response.data?.data?.getAllOrders) {
        const ordersData = response.data?.data?.getAllOrders || [];
        setOrders(ordersData);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

    const fetchUsers = async () => {
        try {
          const token = localStorage.getItem('Token');
          const response = await axios.get('https://vspdealers.onrender.com/api/v1/users/', {
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

  return (
    <div className="container mx-auto p-4"  ref={componentRef}>
      <h1 className="text-2xl font-bold mb-4 text-blue-600">HYUNDAI VEHICLE SPARE PARTS DASHBOARD</h1>

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
          <p className="text-3xl font-bold">{users.length}</p>
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

      
      

      <div className="mt-8">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Download PDF
        </button>
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
    const gradient = myChartRef.createLinearGradient(0, 0, 0, 200);
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

  return <canvas ref={chartRef} />;
};

export default Dashboard;


