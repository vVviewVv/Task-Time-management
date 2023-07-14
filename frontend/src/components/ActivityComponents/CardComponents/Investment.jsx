import React from "react";
import { Typography } from "@mui/material";

function Investment({ projectName }) {
  return (
    <>
      <Typography
        sx={{
          flex: 0.2,
          width: 1,
          p: "10px",
          color: "black",
        }}
      >
        {projectName}
      </Typography>
    </>
  );
}

export default Investment;
