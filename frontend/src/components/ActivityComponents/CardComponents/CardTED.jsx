import React from "react";
import { Stack, useTheme, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CardTED({ task, handleOpenEditModal, handleOpenDeleteModal }) {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flex: 0.2,
          width: 1,
          p: "10px",
        }}
      >
        <Typography
          sx={{
            flex: 0.6,
            width: 1,
            color: "black",
          }}
        >
          {task.Hours} hr {task.Minutes} min
        </Typography>
        <Stack>
          <IconButton aria-label="Example" size="small">
            <EditIcon
              sx={{
                color: theme.palette.custom.edit,
              }}
              onClick={() => {
                handleOpenEditModal(task);
              }}
            />
          </IconButton>
        </Stack>
        <Stack>
          <IconButton aria-label="Example" size="small">
            <DeleteIcon
              sx={{
                color: theme.palette.custom.delete,
              }}
              onClick={() => {
                handleOpenDeleteModal(task);
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
export default CardTED;
