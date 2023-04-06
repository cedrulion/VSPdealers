import React from 'react';
import { FaSearch } from 'react-icons/fa';
function ProductHeader() {
  return (
    <div className="p-4">
   <div className="flex justify-center">
  <div className="search-container rounded-full border border-gray-700 flex items-center justify-center w-1/2 px-4 py-2 mx-auto">
    <FaSearch className="text-gray-700 mr-2" />
    <input className="w-full text-gray-700 bg-transparent focus:outline-none" type="text" placeholder="Search by items, car or part number" />
  </div>
</div>

      <div className='flex p-4 justify-center'>
      <div className="dropdown-container mx-4 ">
       
        <select className='bg-orange-200' >
          <option value="Car Model">Car Model</option>
          <option value="sedan">Sedan</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </div>
      <div className="dropdown-container mx-4">
        <select className='bg-orange-200'>
          <option value="">Company</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="nissan">Nissan</option>
        </select>
        </div>
        <div className="dropdown-container mx-4">
        <select className='bg-orange-200'>
          <option value="">Price</option>
          <option value="under20">Under $20,000</option>
          <option value="20to30">$20,000 - $30,000</option>
          <option value="over30">Over $30,000</option>
        </select>
      </div>
      </div>
  <div className='flex p-4 justify-center'>
      <button className="text-white px-4 py-2 rounded-full  bg-red-700 m-4" type="submit">
      Filter
     </button>
     </div>
   </div>
  );
}

export default ProductHeader;
