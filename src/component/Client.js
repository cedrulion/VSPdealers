import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaUserTimes } from 'react-icons/fa';

function Client() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.get('https://vspdealers-api.onrender.com/api/v1/users/', {
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

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem('Token');
      await axios.delete(`https://vspdealers-api.onrender.com/api/v1/users/${selectedUser}/delete`, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setIsModalOpen(false);
      fetchUsers();
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };

  const handleDeleteUser = (userId) => {
    setSelectedUser(userId);
    setIsModalOpen(true);
  };

  const handleCancelDelete = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 flex mx-auto">Users List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          user.email !== 'admin.user@gmail.com' && (
          <div key={user._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <FaUser className="text-2xl mr-2" />
              <p className="font-bold">{user.firstName} {user.lastName}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-2xl mr-2" />
              <p>{user.email}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-2xl mr-2" />
              <p>{user.telNumber}</p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white py-1 px-4 rounded-md mt-2 hover:bg-red-600"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete User
              </button>
            </div>
          </div>
          )
        ))}
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-md z-10">
            <p className="text-xl font-bold mb-4">Confirm Deletion</p>
            <p>Are you sure you want to delete this user?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-600"
                onClick={deleteUser}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Client;
