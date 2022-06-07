import Typography from "@mui/material/Typography";
import React from "react";

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    Copyright © Hack&Heal {new Date().getFullYear()}.
  </Typography>
);
export default Copyright;
