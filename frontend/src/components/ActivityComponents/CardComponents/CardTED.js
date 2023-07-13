import React from "react";
import { Stack, useTheme, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CardTED() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
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
          1 hr 30 min
        </Typography>
        <Stack>
          <EditIcon
            sx={{
              color: theme.palette.custom.edit,
            }}
            //   style={{
            //     cursor: task?.isSynced ? "default" : "pointer",
            //   }}
            onClick={() => {
              //     if (!task?.isSynced) handleOpenEditModal(task);
            }}
          />
        </Stack>
        <Stack>
          <DeleteIcon
            sx={{
              color: theme.palette.custom.delete,
            }}
            //   style={{
            //     cursor: task?.isSynced ? "default" : "pointer",
            //   }}
            //   onClick={() => {
            //     if (!task?.isSynced) handleOpenDeleteModal(task);
            //   }}
          />
        </Stack>
      </Stack>
    </>
  );
}
export default CardTED;
