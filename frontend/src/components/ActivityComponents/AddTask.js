import React from "react";
import { Stack, useTheme } from "@mui/material";
import { Selector, TakeTime, TaskDetail } from "./AddTaskComponents";

function AddTask() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "1000px",
        height: "50px",
        color: theme.palette.custom.white,
        backgroundColor: theme.palette.custom.black,
        alignItems: "center",
        borderRadius: "5px",
        p: "20px 20px",
        mx: "auto",
      }}
    >
      <Stack>
        <Selector />
        <TakeTime />
      </Stack>
      <Stack sx={{ backgroundColor: theme.palette.custom.red }}>
        <TaskDetail />
      </Stack>
    </Stack>
  );
}

export default AddTask;
