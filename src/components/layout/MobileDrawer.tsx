import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { SyntheticEvent } from "react";

interface Props {
  closeDrawer: (event: Event | SyntheticEvent<Element, Event>) => void;
  open: boolean;
  children: JSX.Element;
};

const MobileDrawer = ({ closeDrawer, open, children }: Props) => (
  <Drawer anchor="left" open={open} onClose={closeDrawer}>
    {children}
  </Drawer>
);
export default MobileDrawer;
