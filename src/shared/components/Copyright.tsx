import Typography from "@mui/material/Typography";

const Copyright = (props: { [key: string]: object }) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    Copyright © eLocker {new Date().getFullYear()}.
  </Typography>
);
export default Copyright;
