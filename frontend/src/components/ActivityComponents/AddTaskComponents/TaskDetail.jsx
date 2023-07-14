import React from "react";
import { TextField, useTheme } from "@mui/material";

function TaskDetail({ detail, setDetail }) {
  const theme = useTheme();
  return (
    <TextField
      required
      value={detail}
      id="outlined-multiline-static"
      label="What are you working on?"
      color="inputColor"
      size="small"
      variant="outlined"
      multiline
      rows={3}
      onChange={(e) => {
        setDetail(e.target.value);
      }}
      sx={{
        width: 1,
        minWidth: 100,
        color: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      }}
      InputProps={{ style: { color: theme.palette.custom.white } }}
      InputLabelProps={{
        style: { color: theme.palette.custom.white },
      }}
    />
  );
}

export default TaskDetail;
