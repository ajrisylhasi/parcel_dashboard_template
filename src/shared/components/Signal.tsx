import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { SyntheticEvent } from "react";

type Props = {
  open: boolean;
  handleClose: (event: Event | SyntheticEvent<Element, Event>) => void;
  type: AlertColor;
  message: string;
};

const Signal = ({ open, handleClose, type, message }: Props) => (
  <Snackbar
    open={open}
    autoHideDuration={5000}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
);

export default Signal;
