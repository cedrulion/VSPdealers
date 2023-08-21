import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ isOpen, closeModal, title, content }) => {
  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
        <div className="bg-white p-6 rounded-lg shadow-md z-10 w-1/2">
          <div className="flex justify-end">
            <button onClick={closeModal}>
              <AiOutlineCloseCircle className="text-3xl text-gray-600 hover:text-red-500" />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          {content}
        </div>
      </div>
    </div>
  );
};


const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productType: '',
    descriptions: '',
    manufacturer: '',
    quantity: '',
    pricePerItem: '',
    productsImages: []
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [actionConfirmation, setActionConfirmation] = useState('');

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
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  };

  const addNewProduct = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.post('https://vspdealers-api.onrender.com/api/v1/products/addNewProduct', newProduct, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const addedProduct = response.data?.data || null;
      if (addedProduct) {
        setNewProduct({
          productName: '',
          productType: '',
          descriptions: '',
          manufacturer: '',
          quantity: '',
          pricePerItem: '',
          productsImages: []
        });
        fetchData();
        alert('Product added successfully!');
      }
    } catch (error) {
      console.error('Error adding new product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const getProduct = async (productId) => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.get(`https://vspdealers-api.onrender.com/api/v1/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const product = response.data?.data || null;
      console.log('Retrieved product:', product);
    } catch (error) {
      console.error('Error retrieving product:', error);
    }
  };

  const updateProduct = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.patch(`https://vspdealers-api.onrender.com/api/v1/products/${selectedProduct}/update`, newProduct, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedProduct = response.data?.data || null;
      if (updatedProduct) {
        setNewProduct({
          productName: '',
          productType: '',
          descriptions: '',
          manufacturer: '',
          quantity: '',
          pricePerItem: '',
          productsImages: []
        });
        fetchData();
        alert('Product updated successfully!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  const deleteProduct = async () => {
    try {
      const token = localStorage.getItem('Token');
      await axios.delete(`https://vspdealers-api.onrender.com/api/v1/products/${selectedProduct}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchData();
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const addProductImages = async () => {
    try {
      if (!selectedProduct || !imageFile) {
        alert('Please select a product and an image before adding an image.');
        return;
      }

      const formData = new FormData();
      formData.append('product_image', imageFile);

      const token = localStorage.getItem('Token');
      const response = await axios.patch(
        `https://vspdealers-api.onrender.com/api/v1/products/addProductImages/${selectedProduct}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const addedImage = response.data?.data || null;
      if (addedImage) {
        setImageFile(null);
        fetchData();
        alert('Image added successfully!');
      }
    } catch (error) {
      console.error('Error adding product image:', error);
      alert('Failed to add image. Please try again.');
    }
  };

  const handleUpdateModal = (productId) => {
    setSelectedProduct(productId);
    setActionConfirmation('update');
  };
  const handleNewModal = () => {
  
    setActionConfirmation('new');
  };


  const handleDeleteModal = (productId) => {
    setSelectedProduct(productId);
    setActionConfirmation('delete');
  };

  const handleAddModal = (productId) => {
    setSelectedProduct(productId);
    setActionConfirmation('addImage');
  };

  const closeModal = () => {
    setActionConfirmation('');
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <button
  className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600"
  onClick={() => handleNewModal()}
>
  Add New Product
</button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product._id} className="border p-4 mb-4">
            <p className="font-bold">{product.productName}</p>
            <p>{product.descriptions}</p>
            <p>Price: {product.pricePerItem}</p>
            <p>Type: {product.productType}</p>
            <p>Quantity: {product.quantity}</p>
            {product.productsImages && product.productsImages.length > 0 && (
              <img src={product.productsImages[0]} alt={product.productName} className="h-32" />
            )}

            <button
              className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
              onClick={() => handleUpdateModal(product._id)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 ml-2 hover:bg-red-600"
              onClick={() => handleDeleteModal(product._id)}
            >
              Delete
            </button>
            <button
              className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 ml-2 hover:bg-red-600"
              onClick={() => handleAddModal(product._id)}
            >
              Add Image
            </button>
          </div>
        ))}
      </div>

      {/* Update Product Modal */}
      {actionConfirmation === 'update' && (
        <Modal
          isOpen={true}
          closeModal={closeModal}
          title="Update Product"
          content={
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.productName}
                    onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Product Type"
                    value={newProduct.productType}
                    onChange={(e) => setNewProduct({ ...newProduct, productType: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.descriptions}
                    onChange={(e) => setNewProduct({ ...newProduct, descriptions: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Manufacturer"
                    value={newProduct.manufacturer}
                    onChange={(e) => setNewProduct({ ...newProduct, manufacturer: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Price Per Item"
                    value={newProduct.pricePerItem}
                    onChange={(e) => setNewProduct({ ...newProduct, pricePerItem: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
                  onClick={updateProduct}
                >
                  Update
                </button>
              </div>
            </>
          }
        />
      )}

      {/* Confirm Deletion Modal */}
      {actionConfirmation === 'delete' && (
        <Modal
          isOpen={true}
          closeModal={closeModal}
          title="Confirm Deletion"
          content={
            <>
              <p>Are you sure you want to delete this product?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
                  onClick={deleteProduct}
                >
                  Delete
                </button>
              </div>
            </>
          }
        />
      )}

      {/* Add Product Modal */}
      {actionConfirmation === 'addImage' && (
        <Modal
          isOpen={true}
          closeModal={closeModal}
          title="Add Product Image"
          content={
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
                  onClick={addProductImages}
                >
                  Add Image
                </button>
              </div>
            </>
          }
        />
      )}

      {/* Add New Product Modal */}
      {actionConfirmation === 'new' && (
        <Modal
          isOpen={true}
          closeModal={closeModal}
          title="Add New Product"
          content={
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.productName}
                    onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Product Type"
                    value={newProduct.productType}
                    onChange={(e) => setNewProduct({ ...newProduct, productType: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.descriptions}
                    onChange={(e) => setNewProduct({ ...newProduct, descriptions: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Manufacturer"
                    value={newProduct.manufacturer}
                    onChange={(e) => setNewProduct({ ...newProduct, manufacturer: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Price Per Item"
                    value={newProduct.pricePerItem}
                    onChange={(e) => setNewProduct({ ...newProduct, pricePerItem: e.target.value })}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
                  onClick={addNewProduct}
                >
                  Add Product
                </button>
              </div>
            </>
          }
        />
      )}
    </div>
  );
};

export default AddProduct;
