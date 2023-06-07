import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box position={"relative"}>
        <Outlet />
    </Box>
  );
}

export default MainLayout;
