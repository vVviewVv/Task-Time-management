import React from "react";
import { TextField, useTheme } from "@mui/material";

function TaskDetail() {
  const theme = useTheme();
  return (
    <TextField
      required
      //   value={detail}
      id="outlined-multiline-static"
      label="What are you working on?"
      color="inputColor"
      size="small"
      variant="outlined"
      multiline
      rows={3}
      onChange={(e) => {
        // setDetail(e.target.value);
      }}
      sx={{
        width: 1,
        minWidth: 100,
      }}
      InputProps={
        {
          // classes: {
          //   root: classes.notchedOutline,
          //   focused: classes.notchedOutline,
          // },
        }
      }
      InputLabelProps={{
        style: { color: theme.palette.custom.white },
      }}
      //   error={isError}
    />
  );
}

export default TaskDetail;
