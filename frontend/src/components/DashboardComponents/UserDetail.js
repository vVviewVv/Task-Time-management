import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

function UserDetail() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: 80,
          width: 80,
          borderRadius: "50%",
          display: "flex",
          backgroundColor: theme.palette.custom.grey,
        }}
      ></Box>
      <Typography
        sx={{
          fontWeight: 500,
        }}
      >
        FirstName LastName
      </Typography>
      <Typography>Job title</Typography>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Email
        </Typography>
        <Typography>Abcd12342@hotmail.com</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          EmployeeID
        </Typography>
        <Typography>7750867</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          DepartmentName
        </Typography>
        <Typography>Resources Pool Unit</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Company
        </Typography>
        <Typography>gosoft (Thailand) Company Limited</Typography>
      </Stack>
    </>
  );
}

export default UserDetail;
