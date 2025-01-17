import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CopyToClipboard = ({ promotion }) => {
  const [alert, setAlert] = useState(null); // State to manage alert message
  const [open, setOpen] = useState(false); // State to control Snackbar visibility

  const handleCopy = () => {
    navigator.clipboard
      .writeText(promotion)
      .then(() => {
        setAlert({ severity: "info", message: "Redeem Code Copied to Clipboard!" });
        setOpen(true); // Open the Snackbar
      })
      .catch((err) => {
        setAlert({ severity: "error", message: "Failed to copy to clipboard!" });
        setOpen(true); // Open the Snackbar
      });
  };

  const handleClose = () => {
    setOpen(false); // Close the Snackbar
  };

  return (
    <div>
      <button 
        onClick={handleCopy}
        className="bg-white px-2 rounded-md text-xs font-bold text-black"
      >
        Redeem Code
      </button>
      
      {/* Snackbar component for showing alert with custom positioning */}
      <Snackbar
        open={open}
        autoHideDuration={2000} // Close the alert after 2 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Change location here
      >
        <Alert severity={alert?.severity} onClose={handleClose}>
          {alert?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CopyToClipboard;
