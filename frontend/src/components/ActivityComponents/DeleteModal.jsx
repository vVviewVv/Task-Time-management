import React from "react";

import {
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Stack,
} from "@mui/material";

import { useMutation, useQueryClient } from "react-query";
import { fetchDeleteActivity } from "../../fetch/fecthActivity";

export default function DeleteModal({
  openDeleteModal,
  handleCloseDeleteModal,
  task,
}) {
  const theme = useTheme();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(fetchDeleteActivity, {
    onError: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries(["timetask"]);
    },
  });

  const deleteTask = () => {
    mutate(task._id);
    handleCloseDeleteModal();
  };

  return (
    <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
      <DialogTitle fontSize={20} fontWeight={600}>
        <Typography align="center">"Are you sure?"</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>you won’t be able to revert this!</DialogContentText>
      </DialogContent>
      <DialogContent>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Button
            onClick={() => deleteTask()}
            variant="contained"
            sx={{
              backgroundColor: "#74DC43",
              "&:hover": { backgroundColor: "#35A700" },
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleCloseDeleteModal}
            variant="contained"
            sx={{
              backgroundColor: "#EE5151",
              "&:hover": { backgroundColor: "#E21818" },
            }}
          >
            No
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
