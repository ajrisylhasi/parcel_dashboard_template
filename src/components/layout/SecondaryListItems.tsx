import { useContext } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/reducers/auth-reducer";
import { storeContext } from "../provider/Provider";

const SecondaryListItems = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(storeContext);
  const handleLogout = () => {
    dispatch({ type: authActions.LOGOUT_USER });
    navigate("/login");
  };
  return (
    <>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};
export default SecondaryListItems;
