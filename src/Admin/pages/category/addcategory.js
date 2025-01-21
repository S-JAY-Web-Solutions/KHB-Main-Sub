import React, { useState } from 'react';

export default function Addcategory({ addCategory }) {
  const [category_name, setCatName] = useState('');
  const [category_description, setCatDesc] = useState('');
  const [category_status, setCatStatus] = useState('active');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    addCategory({
      category_name,
      category_description,
      category_status,
    })
      .then(() => {
        setSuccessMessage('Category added successfully!');
        setCatName('');
        setCatDesc('');
        setCatStatus('active');
      })
      .catch((error) => {
        setErrorMessage('Failed to add category. Please try again.');
        console.error('Error adding category:', error);
      });
  };

  return (
    <div className="container bg-white  rounded-2xl p-4 mt-6 min-h-[75vh]">
      <form
        className="w-full mx-auto bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleAddCategory}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Category</h2>

        {/* Success/Error Messages */}
        {successMessage && (
          <p className="mb-4 text-green-500 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mb-4 text-red-500 font-medium">{errorMessage}</p>
        )}

        {/* Category Name */}
        <div className="mb-4">
          <label htmlFor="category-name" className="block text-gray-700 font-medium mb-2">
            Category Name
          </label>
          <input
            type="text"
            id="category-name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter category name"
            value={category_name}
            onChange={(e) => setCatName(e.target.value)}
            required
          />
        </div>

        {/* Category Description */}
        <div className="mb-4">
          <label htmlFor="category-description" className="block text-gray-700 font-medium mb-2">
            Category Description
          </label>
          <textarea
            id="category-description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter a brief description"
            value={category_description}
            onChange={(e) => setCatDesc(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Category Status */}
        <div className="mb-4">
          <label htmlFor="category-status" className="block text-gray-700 font-medium mb-2">
            Status
          </label>
          <select
            id="category-status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={category_status}
            onChange={(e) => setCatStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-custom-gradient text-white py-2 px-4 rounded-md hover:bg-[#6610f2] transition duration-300"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
