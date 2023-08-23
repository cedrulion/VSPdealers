import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { FaEuroSign } from 'react-icons/fa';
import { BsBagPlus, BsBookmark } from 'react-icons/bs';
import giphy from "../Assets/giphy.gif"
import HomeNav from './HomeNav';
import Footer from './Footer';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const baseURL = 'https://vspdealers-api.onrender.com/api/v1/products';

function ProductHeader() {
  const [products, setProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedproductType, setSelectedproductType] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const retrievedArray = localStorage.getItem('cartItems');
    return retrievedArray ? JSON.parse(retrievedArray) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevArray) => [...prevArray, product]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.get('https://vspdealers-api.onrender.com/api/v1/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data?.data?.allProducts || [];
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = products
    ? products.filter((product) => {
        const productType = product.productType.trim().toUpperCase();
        return (
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedPriceRange === '' ||
            (selectedPriceRange === 'under20' && product.price < 20000) ||
            (selectedPriceRange === '25to30' &&
              product.pricePerItem >= 25000 &&
              product.pricePerItem <= 30000) ||
            (selectedPriceRange === 'over30' && product.pricePerItem > 30000)) &&
          (selectedproductType === '' ||
            (selectedproductType === 'WHEELS' && productType === 'WHEELS') ||
            (selectedproductType === 'BODY PARTS' && productType === 'BODY PARTS') ||
            (selectedproductType === 'ELECTRONICS' && productType === 'ELECTRONICS') ||
            (selectedproductType === 'INTERIOR' && productType === 'INTERIOPR') ||
            (selectedproductType === 'LIGHTING' && productType === 'LIGHTING') ||
            (selectedproductType === 'MECHANICS' && productType === 'MECHANICS'))
        );
      })
    : [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <HomeNav />
      <div className="flex justify-center p-4 ">
        <div className="search-container rounded-full border border-gray-700 flex items-center justify-center w-1/2 px-4 py-2 mx-auto">
          <FaSearch className="text-gray-700 mr-2" />
          <input
            className="w-full text-gray-700 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search for spare part"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex p-4 justify-center font-Ubuntu">
        <div className="dropdown-container mx-4 ">
          <select
            className="bg-orange-200 rounded-full py-2 px-3"
            value={selectedproductType}
            onChange={(e) => setSelectedproductType(e.target.value)}
          >
            <option value="">Category</option>
            <option value="WHEELS">Whells</option>
            <option value="BODY PARTS">Body Parts</option>
            <option value="ELECTRONICS">Electromics</option>
            <option value="INTERIOR">Interior</option>
            <option value="LIGHTING">Lightning</option>
            <option value="MECHANICS">Mechanics</option>
          </select>
        </div>
        <div className="dropdown-container mx-4">
          <select
            className="bg-orange-200 rounded-full py-2 px-3"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">Price range</option>
            <option value="under20">Under $20,000</option>
            <option value="25to30">$25,000 - $30,000</option>
            <option value="over30">Over $30,000</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-red-700 font-Ubuntu hover:bg-gray-100 hover:text-[#C52F33] text-white rounded-full py-2 px-16 font-semibold">
          Filter
        </button>
      </div>
      <section>
        <div>
          <div id="loading">
            {isLoading && <img src={giphy} className='flex mx-auto min-h-screen rounded-lg group bg-gray-100"' />}
          </div>
          <div className="m-6 grid grid-cols-3 border-[1px] rounded-lg group bg-gray-100">
            {filteredProducts.map((product) => (
              <div
                className="pl-14 pb-5 cursor-pointer group-hover:scale-[0.85] hover:!scale-100 duration-500 "
                key={product._id}
              >
                <div className="shadow-lg">
                  <div className="bg-white w-64 h-24 px-4">
                    <div className="flex text-[#C52F33] space-x-2 justify-between items-center pt-3">
                      <h1 className="font-bold text-black font-Roboto">{product.productName}</h1>
                      <div>
                        <BsBookmark className="text-2xl" />
                      </div>
                      <div className="h-32 w-32">
                        <img src={product.productsImages} alt="belt" onClick={() => openModal(product)} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-100 w-64 h-84">
                    <div className="">
                      <div className="mr-4">
                        <BsBagPlus className="text-[#C52F33] text-2xl" />
                      </div>
                    </div>
                    <div className="text-xl ml-3 font-Ubuntu ">
                      <p className="text-black opacity-[0.5]">Price</p>
                      <div className='flex justify-between py-3'>
                        <p className="font-semibold">{product.pricePerItem}</p>
                        <h1 className='text-2xl font-bold'>Rwf</h1>
                      </div>
                    </div>
                    <div className="flex text-sm ml-3 font-Ubuntu">
                      <p className="text-black opacity-[0.5]">Type</p>
                      <p className="font-semibold ml-2">{product.productType}</p>
                    </div>
                    <div className="flex text-sm ml-3 font-Ubuntu">
                      <p className="text-black opacity-[0.5]">Quantity</p>
                      <p className="font-semibold ml-2">{product.quantity}</p>
                    </div>
                    
                    <div className="ml-10 mt-5">
                      
                      <button
                        className="bg-[#C52F33] hover:bg-gray-100 hover:text-[#C52F33] font-Ubuntu text-white uppercase rounded-[16px] py-2 px-8 font-semibold"
                        onClick={() => addToCart(product)}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {isModalOpen && selectedProduct && (
  <div className="fixed inset-0 flex items-center justify-center h-screen z-50 text-5xl">
    <div className="modal-container bg-white shadow-lg rounded-lg p-6 w-1/2">
      
      <h1 className="text-2xl font-semibold mb-2">{selectedProduct.productName}</h1>
      <div className="modal-details mb-4">
        <p className="text-gray-600">
          <span className="font-semibold">Price:</span> {selectedProduct.pricePerItem} Rwf
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Type:</span> {selectedProduct.productType}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Quantity:</span> {selectedProduct.quantity}
        </p>
        <div className="description-section max-h-48 overflow-y-auto">
          <span className="font-semibold">Description:</span>
          <p className="description-text">{selectedProduct.descriptions}</p>
        </div>
      </div>
      <button
        className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800"
        onClick={closeModal}
      >
       <AiOutlineCloseCircle />
      </button>
    </div>
  </div>
)}


    </div>
  );
}

export default ProductHeader;
