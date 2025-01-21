import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Axios from 'axios';

import Categorybuttons from './categorybuttons';
import Allcategory from './allcategory';
import Addcategory from './addcategory';
import Updatecategory from './updatecategory';
import Deletecategory from './deletecategory';

export default function Category() {

  const [categories, setCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    Axios.get('http://localhost:3001/api/category')
      .then(response => {
        setCategories(response?.data?.response || []);
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      });
  }

  const addCategory = (data) => {
    setSubmitted(true);
    const payload = {
      category_name: data.category_name,
      category_description: data.category_description,
      category_status: data.category_status,
    };

    // Return the promise from Axios so that .then() can be used
    return Axios.post('http://localhost:3001/api/addcategory', payload)
      .then(response => {
        setSubmitted(false);
        getCategories();
      })
      .catch(error => {
        setSubmitted(false);
        console.error("Axios Error : ", error);
        throw error;  // Rethrow error to handle in the component
      });
  }

  return (
    <div className='container'>
      <div className='flex flex-row justify-center'>
        <Categorybuttons />
      </div>

      <div className=' shadow-gray-700 shadow-md  rounded-2xl'>
        <Routes>
          <Route path="/" element={<Allcategory data={categories} />} />
          <Route path="/addcategory" element={<Addcategory addCategory={addCategory} />} />
          <Route path="/updatecategory" element={<Updatecategory />} />
          <Route path="/deletecategory" element={<Deletecategory />} />
        </Routes>
      </div>

    </div>
  );
}
