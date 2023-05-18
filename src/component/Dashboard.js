import React from 'react';

function Dashboard() {
  return (
    <div className="w-full bg-gray-200 min-h-screen">
         <h1 className="text-2xl font-bold ml-5">Dashboard</h1>
       <div className='p-6'>
          <div className='border border-gray-300 rounded-full'>
        <h2 className="text-2xl font-bold text-center">Overview</h2>
        </div>
        <div className='flex py-6 gap-8'>
      <div className="flex flex-col w-full">
     
        <div className="flex h-full w-50 ">
          <div className="flex flex-col w-full bg-white p-4 m-2 rounded-2xl">
            <h2 className="text-lg">Orders</h2>
            <p className="text-2xl py-6">10</p>
          </div>
          <div className="flex flex-col w-full bg-white p-4 m-2 rounded-2xl">
            <h2 className="text-lg">Products</h2>
            <p className="text-2xl py-6">20</p>
          </div>
          <div className="flex flex-col w-full bg-white p-4 m-2 rounded-2xl ">
            <h2 className="text-lg">Customers</h2>
            <p className="text-2xl py-6">5</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-1/2 rounded-2xl ">
        <h2 className="text-lg m-4">Popular Products</h2>
        <div className=" justify-center">
          <div className="flex flex-col  p-4 m-2">
            <h3 className="text-lg">Product A</h3>
            <p className="text-sm">Rating: 4.5</p>
          </div>
          <div className="flex flex-col  p-4 m-2">
            <h3 className="text-lg">Product B</h3>
            <p className="text-sm">Rating: 4.2</p>
          </div>
          <div className="flex flex-col  p-4 m-2">
            <h3 className="text-lg">Product C</h3>
            <p className="text-sm">Rating: 4.0</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
