import React, { useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';
import Dashboard from './Dashboard';
import ReadProduct from './ReadProduct';

const baseURL = 'http://localhost:3000/Products'


function AddProduct() {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Image, setImage] = useState('');
  const [Type, setType] = useState('');
  const [Price, setPrice] = useState('')


  const handleSubmit =  (event) => {
    event.preventDefault();
 axios.post(`http://localhost:3000/Products`,{
  Title,
  Description,
  Image,
  Type,
  Price

 }

)
 
  }

  return (
    <div className='w-full min-h-screen mb-6'>
      
      <div className="bg-gray-200 ">
        <div className='p-6'>
          <div className='border border-gray-300 rounded-full'>
        <h2 className="text-2xl font-bold text-center">Products</h2>
        </div>
        <form>
          <div className='gap-4 p-6'>
            <div>
         
              <div className="mb-4">
                <input
                  type="text"
                
                  placeholder='Title'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                  onChange={(event) => setTitle(event.target.value)}
                 
                  
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
              
                  placeholder='Type'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                 onChange={(event) => setType(event.target.value)}
                 
                />
              </div>
              <div className="mb-4 flex">
                <div>
                <input
                  type="number"
                 
                  placeholder='Price'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 "
                  required
                  onChange={(event) => setPrice( event.target.value)}
                  
                />
                </div>
                  <div className="dropdown-container mx-4 w-full">
        <select className='rounded-full py-2 px-3 '
    
  >
            <option value="">Category</option>
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
                  placeholder='Image'
                  className="form-control border border-gray-400 rounded-full px-3 py-2 w-1/2"
                  required
                 onChange={(event) => setImage(event.target.value)}
                 
                />
              </div>
            </div>
              <div className="mb-4">
                <textarea
              
                  placeholder='Description'
                  className="form-control border border-gray-400 rounded-full w-1/2 px-3 py-2 "
                  required
                  onChange={(event) => setDescription( event.target.value)}
                
                ></textarea>
              </div>
            </div>
          
          </div>
         
        </form>
        <div className="flex px-4 py-2 justify-center">
        <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 " onClick={handleSubmit} >Add a new product</button>
        </div>
      </div>
      
      </div>
      <ReadProduct className="py-2"/>
    </div>
  );
}

export default AddProduct;
