import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'http://shemaherbez-001-site1.atempurl.com/api/product/show';
const deleteURL = 'http://shemaherbez-001-site1.atempurl.com/api/product/delete'

const ReadProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      if (Array.isArray(response.data.product_list)) {
        setData(response.data.product_list);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log('Error fetching product:', error);
    }
  };
  const deleteProduct = async (ProductId) => {
  try {
    await axios.delete(`${deleteURL}/${ProductId}`);
    fetchData(); // Fetch data again after deletion
  } catch (error) {
    console.log('Error deleting product:', error);
  }
};

  return (
    <div>
      <section>
        <div>
          {data.map((product) => (
            <div className='pl-14' key={product.id}>
             <div className='flex gap-2 w-full h-full'>
  <div className='h-2'>
    <img src={product.image} alt='product' className='max-h-48' /> {/* Adjust the max-height of the image */}
  </div>
  <div className='flex flex-col'>
    <h1 className='text-red-700 text-xl font-bold'>{product.name}</h1> {/* Adjust the font size and styling */}
    <h1 className='font-bold text-lg'>{product.price}</h1> {/* Adjust the font size and styling */}
    <div className='text-sm font-Ubuntu'>
      <p className='text-black opacity-50'>Type</p>
      <p className='font-semibold'>{product.type}</p>
    </div>
    <div className='text-sm'>
      <h1 className='font-Ubuntu text-black opacity-50 py-3'>Description</h1>
      <p className='font-semibold'>{product.description}</p> {/* Adjust the width of the description */}
    </div>
                <div className='mx-auto flex gap-2 items-center py-15'>
                  <button className='border border-red-600 hover:bg-red-700 font-bold py-2 px-16 rounded-full items-center'>
                    Edit
                  </button>
                  <button
        className='border border-red-600 hover:bg-red-700 font-bold py-2 px-16 rounded-full'
        onClick={() => deleteProduct(product.id)} // Call deleteProduct with the product ID
      >
        Delete
      </button>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReadProduct;
