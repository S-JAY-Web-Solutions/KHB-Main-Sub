import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateCategory({ updateCategory }) {
  const [category_id, setCatId] = useState();
  const [category_name, setCatName] = useState('');
  const [category_description, setCatDesc] = useState('');
  const [category_status, setCatStatus] = useState('active');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const categoryData = location.state?.categoryData;

  useEffect(() => {
    if (categoryData) {
      setCatId(categoryData.category_id || '');
      setCatName(categoryData.category_name || '');
      setCatDesc(categoryData.category_description || '');
      setCatStatus(categoryData.category_status || 'active');
    } else {
      navigate('/category'); // Redirect if no data is found
    }
  }, [categoryData, navigate]);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    updateCategory({
      category_id,
      category_name,
      category_description,
      category_status,
    })
      .then(() => {
        setSuccessMessage('Category updated successfully!');
        navigate('/category/updatecategory', {
          state: { categoryData: { category_id, category_name, category_description, category_status } },
        });
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || 'Failed to update category. Please try again.';
        setErrorMessage(errorMsg);
        console.error('Error updating category:', error);
      });
  };

  if (!categoryData) {
    return <div className="text-center text-gray-500">Redirecting...</div>;
  }

  return (
    <div className="container bg-white rounded-2xl p-4 mt-6 min-h-[75vh]">
      <form
        className="w-full mx-auto bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleUpdateCategory}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Category</h2>

        {successMessage && <p className="mb-4 text-green-500 font-medium">{successMessage}</p>}
        {errorMessage && <p className="mb-4 text-red-500 font-medium">{errorMessage}</p>}

        <div className="mb-4">
          <label htmlFor="category-name" className="block text-gray-700 font-medium mb-2">
            Category Name
          </label>
          <input
            type="text"
            id="category-name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={category_name}
            onChange={(e) => setCatName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category-description" className="block text-gray-700 font-medium mb-2">
            Category Description
          </label>
          <textarea
            id="category-description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={category_description}
            onChange={(e) => setCatDesc(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="category-status" className="block text-gray-700 font-medium mb-2">
            Status
          </label>
          <select
            id="category-status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={category_status}
            onChange={(e) => setCatStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-custom-gradient text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Category
        </button>

        <button
          type="button"
          onClick={() => navigate('/category')}
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 mt-4"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
