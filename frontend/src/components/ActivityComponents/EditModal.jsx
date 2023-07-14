import React, { useEffect, useState } from "react";

import {
  useTheme,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  LabelAndInputTaskDetails,
  LabelAndInputTime,
  ProjectSelector,
} from "../EditModalComponents";

import { useMutation, useQueryClient } from "react-query";
import { fetchUpdateActivity } from "../../fetch/fecthActivity";

export default function EditModal({
  openEditModal,
  handleCloseEditModal,
  taskInputValue,
}) {
  const theme = useTheme();
  const queryClient = new useQueryClient();

  const eventMutation = useMutation(fetchUpdateActivity, {
    onError: () => {},
    onSettled: () => {
      queryClient.invalidateQueries(["timetask"]);
    },
  });

  const [taskDetails, setTaskDetails] = useState("");
  const [taskProject, setTaskProject] = useState("");
  const [taskHours, setTaskHours] = useState(0);
  const [taskMinutes, setTaskMinutes] = useState(0);

  const updateTask = () => {
    const task = {
      _id: taskInputValue._id,
      Hours: taskHours,
      ProjectName: taskProject,
      Detail: taskDetails,
      Minutes: taskMinutes,
    };
    eventMutation.mutate(task);
    handleCloseEditModal();
  };

  const resetActivity = () => {
    setTaskDetails(taskInputValue.detail);
    setTaskHours(taskInputValue.hours);
    setTaskMinutes(taskInputValue.minutes);
  };

  return (
    <Dialog open={openEditModal} onClose={handleCloseEditModal}>
      <DialogTitle
        color={theme.palette.custom.defaultTextColor}
        fontSize={20}
        fontWeight={600}
      >
        {"Edit Activity"}
        <IconButton
          aria-label="close"
          onClick={handleCloseEditModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pr: 4 }}>
        <table>
          <ProjectSelector
            taskProject={taskProject}
            setTaskProject={setTaskProject}
          />
          <LabelAndInputTaskDetails
            taskDetails={taskDetails}
            setTaskDetails={setTaskDetails}
          />
          <LabelAndInputTime
            taskHours={taskHours}
            setTaskHours={setTaskHours}
            taskMinutes={taskMinutes}
            setTaskMinutes={setTaskMinutes}
          />
        </table>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={resetActivity}
          variant="contained"
          sx={{
            backgroundColor: "#EE5151",
            "&:hover": { backgroundColor: "#E21818" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => updateTask()}
          sx={{
            backgroundColor: "#74DC43",
            "&:hover": { backgroundColor: "#35A700" },
          }}
          variant="contained"
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
