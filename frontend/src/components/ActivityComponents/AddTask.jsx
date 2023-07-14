import React, { useEffect, useState } from "react";
import { Button, Stack, useTheme } from "@mui/material";
import { Selector, TakeTime, TaskDetail } from "./AddTaskComponents";
import { fetchAddTask, fetchActivities } from "../../fetch/fecthActivity";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const theme = useTheme();
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inv, setInv] = useState("");
  const [detail, setDetail] = useState("");

  const queryClient = new useQueryClient();

  const eventMutation = useMutation(fetchAddTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["timetask"]);
    },
  });

  const clearInputValue = () => {
    setInv("");
    setDetail("");
    setInputHours(0);
    setInputMinutes(0);
  };
  const addActivity = () => {
    const Task = {
      UserId: 0,
      ProjectName: inv,
      DateOfTask: new Date().toISOString().split("T")[0],
      Hours: inputHours,
      Minutes: inputMinutes,
      Detail: detail,
    };
    eventMutation.mutate(Task);
    clearInputValue();
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "80vw",
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
        <Selector inv={inv} setInv={setInv} />
        <TakeTime
          hours={inputHours}
          setHours={setInputHours}
          minutes={inputMinutes}
          setMinutes={setInputMinutes}
        />
      </Stack>
      <Stack
        spacing="10px"
        sx={{
          flex: 1,
          width: 1,
          p: "20px",
        }}
      >
        <TaskDetail detail={detail} setDetail={setDetail} />
      </Stack>
      <Stack>
        <Button
          onClick={() => {
            addActivity();
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
