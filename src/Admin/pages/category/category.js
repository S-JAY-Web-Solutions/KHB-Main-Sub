import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import Axios from 'axios';

import Categorybuttons from './categorybuttons';
import Allcategory from './allcategory';
import Addcategory from './addcategory';
import Updatecategory from './updatecategory';


export default function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCat?.id && selectedCat?.name) {
      getCategoryById();
    }
  }, [selectedCat]);

  const handleClickOpen = (category) => {
    setDeleteData(category);
    setDialogOpen(true);
  };

  const handleClickClose = () => {
    setDialogOpen(false);
    setDeleteData(null);
  };

  const getCategories = () => {
    setLoading(true);
    Axios.get('http://localhost:3001/api/category')
      .then((response) => {
        setCategories(response?.data?.response || []);
      })
      .catch((error) => {
        console.error('Axios Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCategoryById = () => {
    Axios.get(`http://localhost:3001/api/getcategory?id=${selectedCat.id}&name=${selectedCat.name}`)
      .then((response) => {
        const fetchedCategory = response?.data?.response || {};
        navigate('/category/updatecategory', { state: { categoryData: fetchedCategory } });
      })
      .catch((error) => {
        console.error('Axios Error:', error);
      });
  };

  const addCategory = (data) => {
    const payload = {
      category_name: data.category_name,
      category_description: data.category_description,
      category_status: data.category_status,
    };

    return Axios.post('http://localhost:3001/api/addcategory', payload)
      .then((response) => {
        getCategories();
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        throw error;
      });
  };

  const updateCategory = (data) => {
    const payload = {
      category_id: data.category_id,
      category_name: data.category_name,
      category_description: data.category_description,
      category_status: data.category_status,
    };

    return Axios.post('http://localhost:3001/api/updatecategory', payload)
      .then((response) => {
        getCategories();
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        throw error;
      });
  };

  const deleteCategory = () => {
    if (!deleteData) return;

    Axios.post('http://localhost:3001/api/deletecategory', deleteData)
      .then((response) => {
        getCategories();
        handleClickClose();
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        throw error;
      });
  };

  return (
    <div className="container">
      <div className="flex flex-row justify-center">
        <Categorybuttons />
      </div>

      {loading && <div>Loading...</div>}

      <div className="shadow-gray-700 shadow-md rounded-2xl">
        <Routes>
          <Route
            path="/"
            element={
              <Allcategory
                data={categories}
                onCategorySelect={(categoryData) => setSelectedCat(categoryData)}
                onCategoryDelete={(category) => handleClickOpen(category)}
              />
            }
          />
          <Route path="/addcategory" element={<Addcategory addCategory={addCategory} />} />
          <Route path="/updatecategory" element={<Updatecategory updateCategory={updateCategory} />} />
        </Routes>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete {deleteData?.name || 'this'} Category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {deleteData?.name || 'this'} category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={deleteCategory} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
