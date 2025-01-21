import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Add , List} from '@mui/icons-material';

export default function categorybuttons() {
  return (
    <div className='flex gap-12'>
        <Link to="/category" className="nav-link">
            <Button className="!bg-custom-gradient hover:bg-[#6610f2] !text-white" startIcon={<List/>}>All Category</Button>
          </Link>
          <Link to="/category/addcategory" className="nav-link">
            <Button className="!bg-custom-gradient hover:bg-[#6610f2] !text-white" startIcon={<Add/>}>Add Category</Button>
          </Link>
    </div>
  )
}
