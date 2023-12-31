import React, { useState } from "react";
import { Stack, useTheme } from "@mui/material";
import { Investment, CardDetail, CardTED } from "./CardComponents";

function Card({ task, handleOpenEditModal, handleOpenDeleteModal }) {
  const theme = useTheme();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "80vw",
          height: "30px",
          color: theme.palette.custom.white,
          backgroundColor: theme.palette.custom.white,
          alignItems: "center",
          borderRadius: "5px",
          p: "20px 20px",
          mb: "5px",
        }}
      >
        <Investment projectName={task.ProjectName} />
        <CardDetail detail={task.Detail} />
        <CardTED
          task={task}
          handleOpenEditModal={handleOpenEditModal}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      </Stack>
    </>
  );
}

export default Card;
