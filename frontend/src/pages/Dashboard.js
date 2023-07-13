import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import UserDetail from "../components/DashboardComponents/UserDetail";
import Chart from "../components/DashboardComponents/Chart";

function Dashboard() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mt: "20px",
        mb: "20px",
        width: "1000px",
        height: "500px",
      }}
    >
      <Stack
        sx={{
          backgroundColor: theme.palette.custom.white,
          mr: "5px",
          flex: 0.3,
          height: 1,
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserDetail />
      </Stack>
      <Stack
        sx={{
          backgroundColor: theme.palette.custom.white,
          ml: "5px",
          flex: 0.7,
          height: 1,
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Chart />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
