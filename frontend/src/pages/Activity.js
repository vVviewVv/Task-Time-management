import React from "react";
import { Stack } from "@mui/material";
import AddTask from "../components/ActivityComponents/AddTask";

function Activity() {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          p: "20px 20px",
          mx: "auto",
        }}
      >
        <AddTask />
      </Stack>
    </>
  );
}

export default Activity;
