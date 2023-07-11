import React from "react";
import { Stack } from "@mui/material";
import AddTask from "../components/ActivityComponents/AddTask";
import UseWindowSize from "../hook/useWindowSize";

function Activity() {
  const windowSize = UseWindowSize();
  return (
    <>
      <Stack
        width={windowSize.width >= 750 ? 0.98 : 1}
        sx={{
          alignItems: "center",
          mx: "auto",
          marginTop: "30px",
        }}
      >
        <AddTask />
      </Stack>
    </>
  );
}

export default Activity;
