import React from "react";
import { Typography } from "@mui/material";

function CardDetail({ detail }) {
  return (
    <>
      <Typography
        sx={{
          flex: 0.6,
          width: 1,
          p: "10px",
          color: "black",
        }}
      >
        {detail}
      </Typography>
    </>
  );
}
export default CardDetail;
