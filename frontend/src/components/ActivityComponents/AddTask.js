import React from "react";
import { Stack, useTheme } from "@mui/material";

function AddTask() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      // spacing={2}
      sx={{
        width: "1000px",
        height: "50px",
        whiteSpace: "nowrap",
        color: theme.palette.custom.white,
        backgroundColor: theme.palette.custom.black,
        alignItems: "center",
        borderRadius: "5px",
        p: "20px 20px",
        mx: "auto",
      }}
    >
      <Stack>ฟฟ</Stack>
      <Stack>ฟฟฟ</Stack>
    </Stack>
  );
}

export default AddTask;
