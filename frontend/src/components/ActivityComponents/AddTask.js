import React from "react";
import { Button, Stack, useTheme } from "@mui/material";
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
        height: "80px",
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
      <Stack
        spacing="10px"
        sx={{
          flex: 1,
          width: 1,
          p: "20px",
        }}
      >
        <TaskDetail />
      </Stack>
      <Stack>
        <Button
          onClick={() => {
            // addActivity();
          }}
          variant="contained"
          color="addBtn"
          sx={{
            ":hover": {
              bgcolor: "red",
            },
          }}
        >
          Add
        </Button>
      </Stack>
    </Stack>
  );
}

export default AddTask;
