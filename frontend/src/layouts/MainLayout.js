import React from "react";
import { Stack, useTheme, Box, Typography } from "@mui/material";
import { useNavigate, Outlet } from "react-router";

function MainLayout() {
  const navigate = useNavigate();
  const theme = useTheme();

  const slidebarItem = [
    {
      id: 0,
      name: "Activity",
      path: "/activity",
    },
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          m: 0,
          minHeight: 15,
          backgroundColor: theme.palette.custom.black,
          alignContent: "center",
          p: "10px 10px 10px 10px",
        }}
      >
        <Box
          component="img"
          alt="Logo"
          src="/images/cropped-LOGO-gosoft.png"
          justifyContent="flex-start"
          sx={{
            height: 25,
            display: "flex",
          }}
        ></Box>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          {slidebarItem.map((i) => (
            <Box
              key={i.id}
              onClick={() => {
                navigate(`${i.path}`);
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                m: 0,
                color: theme.palette.custom.white,
              }}
            >
              {i.name}
            </Box>
          ))}
          <Box
            sx={{
              height: 25,
              width: 25,
              borderRadius: "50%",
              display: "flex",
              backgroundColor: theme.palette.custom.white,
            }}
          ></Box>
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
}

export default MainLayout;
