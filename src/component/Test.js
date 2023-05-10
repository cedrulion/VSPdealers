import React, { useState } from 'react';
import axios  from 'axios'

function Test() {
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Image, setImage] = useState('');
    const [Type, setType] = useState('');
    const [Price, setPrice] = useState('')
  
  
    const handleSubmit =  (event) => {
      event.preventDefault();
   axios.post(`http://localhost:3000/Input`,{
    Title,
    Description,
    Image,
    Type,
    Price
  
   }
  
  )
   
    }
  
    return (
      <div className=' container flex p-9'>
        
        <div className="bg-gray-200  min-h-screen">
          <div className=''>
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
  
          <form>
            <div className='grid grid-cols-2 gap-4'>
              <div>
           
                <div className="mb-4">
                  <input
                    type="text"
                  
                    placeholder='Title'
                    className="form-control border border-gray-400 rounded-full px-3 py-2 w-full"
                    required
                    onChange={(event) => setTitle(event.target.value)}
                   
                    
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                
                    placeholder='Type'
                    className="form-control border border-gray-400 rounded-full px-3 py-2 w-full"
                    required
                   onChange={(event) => setType(event.target.value)}
                   
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                   
                    placeholder='Price'
                    className="form-control border border-gray-400 rounded-full px-3 py-2 w-full"
                    required
                    onChange={(event) => setPrice( event.target.value)}
                    
                  />
                </div>
                <div className="mb-4">
                  <textarea
                
                    placeholder='Description'
                    className="form-control border border-gray-400 rounded-sm px-3 py-2 w-full"
                    required
                    onChange={(event) => setDescription( event.target.value)}
                  
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label htmlFor="photo" className="block mb-2 font-bold">Photo:</label>
                  <input
                    type='text'
                    className="form-control border border-gray-400 rounded-full px-3 py-2 w-full"
                    required
                   onChange={(event) => setImage(event.target.value)}
                   
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 mt-4" onClick={handleSubmit} >Add a new product</button>
          </form>
        </div>
        </div>
      </div>
    );
  }

export default Test
