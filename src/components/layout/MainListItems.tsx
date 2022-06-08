import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

interface Props {
  closeDrawer: () => void;
}

const MainListItems = ({ closeDrawer }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItemButton
        onClick={() => {
          navigate("/", { replace: true });
          closeDrawer();
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </>
  );
};

export default MainListItems;
