import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { fetchUserDetail } from "../../fetch/fetchUser";

function UserDetail() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchUserDetail().then((e) => {
      setData(e);
    });
  }, []);

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
        {data?.Firstname} {data?.Lastname}
      </Typography>
      <Typography>{data?.JobTitle}</Typography>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Email
        </Typography>
        <Typography>{data?.Email}</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          EmployeeID
        </Typography>
        <Typography>{data?._id}</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Department Name
        </Typography>
        <Typography>{data?.DepartmentName}</Typography>
      </Stack>
      <Stack sx={{ width: 0.9, mb: "5px" }}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Company
        </Typography>
        <Typography>{data?.Company}</Typography>
      </Stack>
    </>
  );
}

export default UserDetail;
