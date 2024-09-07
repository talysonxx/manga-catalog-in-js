import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const Alerta = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
      <Alert onClose={onClose} severity="error" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Alerta;
