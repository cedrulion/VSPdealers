import React, { useState } from 'react';
import axios from 'axios';

import ReadProduct from './ReadProduct';



function AddProduct() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    type:'',
    quantity:''
   
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://shemaherbez-001-site1.atempurl.com/api/product/store`, productData);
      console.log('Saved successful');
      alert('Saved successful!');
    } catch (error) {
      console.error('Save failed', error);
      alert('Save failed');
    }
  };

  return (
    <div className='w-full min-h-screen mb-6'>
      
      <div className="bg-gray-200 ">
        <div className='p-6'>
          <div className='border border-gray-300 rounded-full'>
        <h2 className="text-2xl font-bold text-center">Products</h2>
        </div>
        <form onSubmit={handleSave}>
          <div className='gap-4 p-6 ml-12'>
            <div >
         
              <div className="mb-4 ">
                <input
                  type="text"

                
                  placeholder='Title'
                  name='name'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                  onChange={handleInputChange}
                 
                  
                />
              </div>
            
              <div className="mb-4 flex">
                <div>
                <input
                  type="number"
                 
                  placeholder='Price'
                  name='price'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 "
                  required
                  onChange={handleInputChange}
                  
                />
                </div>
                  <div className="dropdown-container mx-4 w-full">
        <select className='rounded-full py-2 px-3 ' onChange={handleInputChange}
        name='type'
    
  >
            <option value="" >Type</option>
          <option value="toyota">Whells</option>
          <option value="honda">Body Parts</option>
          <option value="nissan">Electromics</option>
          <option value="nissan">Interior</option>
          <option value="nissan">Lightning</option>
          <option value="nissan">Mechanics</option>
        </select>
      </div>

              </div>
              <div>
              <div className="mb-4">
              
                <input
                  type='text'
                  placeholder='Quantity'
                  name='quantity'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                  onChange={handleInputChange}
                 
                />
              </div>
            </div>
              <div>
              <div className="mb-4">
              
                <input
                  type='text'
                  placeholder='Image'
                  name='image'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                  onChange={handleInputChange}
                 
                />
              </div>
            </div>
              <div className="mb-4">
                <textarea
              
                  placeholder='Description'
                  name='description'
                  className="form-control border border-gray-400 rounded-full w-1/2 px-3 py-2 "
                  required
                  onChange={handleInputChange}
                
                ></textarea>
              </div>
            </div>
          
          </div>
          <div className="flex px-4 py-2 justify-center">
        <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 ">Add a new product</button>
        </div>
         
        </form>
        
      </div>
      
      </div>
      <ReadProduct className="py-2"/>
    </div>
  );
}

export default AddProduct;
