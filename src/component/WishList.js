import React, { useState } from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';

function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const [newProduct, setNewProduct] = useState({ id: '', name: '', description: '', image: '' });

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.description && newProduct.image) {
      addToWishlist(newProduct);
      setNewProduct({ id: '', name: '', description: '', image: '' });
    }
  };

  return (
    <div className='min-h-creen bg-gray-200'>
      <HomeNav />
      <div className=" text-3xl mx-auto mt-8 ">
      <div className="" >
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
        <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
            className="mr-2 p-2 border"
          />
          </div>
          <div className="mb-2">
          <input
            type="text"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            required
            className="mr-2 p-2 border"
          />
          </div>
          <div className="mb-2">
          <input
            type="url"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
            className="mr-2 p-2 border"
          />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Add to Wishlist
          </button>
        </form>
        {wishlist.length === 0 ? (
          <p >Your wishlist is empty.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-200">
            {wishlist.map((product) => (
              <li
                key={product.id}
                className="border p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 mx-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <button
                  onClick={() => removeFromWishlist(product)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
    
  );
}

export default WishList;
