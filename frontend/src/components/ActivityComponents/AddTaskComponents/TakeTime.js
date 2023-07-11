import React from "react";
import { TextField, useTheme, Stack } from "@mui/material";

function TakeTime() {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <TextField
        id="standard-number"
        label="Hours"
        type="number"
        //   value={hours}
        color="inputColor"
        onChange={(e) => {
          if (e.target.value > 23) e.target.value = 23;
          else if (e.target.value < 0) e.target.value = 0;
          // setHours(e.target.value);
        }}
        InputProps={{ inputProps: { min: 0, max: 23 } }}
        InputLabelProps={{
          shrink: true,
          style: { color: theme.palette.custom.white },
          maxLength: 23,
          minLength: 0,
        }}
        variant="standard"
        sx={{
          width: 50,
          input: { color: "white", borderColor: "red" },
          color: theme.palette.custom.white,
          "& .MuiTextField-root": {
            border: "1px solid red",
          },
        }}
        size="small"
        //   error={isError}
      />

      <TextField
        id="standard-number"
        label="Minutes"
        type="number"
        color="inputColor"
        //   value={minutes}
        onChange={(e) => {
          if (e.target.value > 59) e.target.value = 59;
          else if (e.target.value < 0) e.target.value = 0;
          // setMinutes(e.target.value);
        }}
        InputLabelProps={{
          shrink: true,
          style: { color: theme.palette.custom.white },
        }}
        variant="standard"
        sx={{ width: 50, input: { color: theme.palette.custom.white } }}
        InputProps={{ inputProps: { min: 0, max: 59 } }}
        size="small"
        //   error={isError}
      />
    </Stack>
  );
}

export default TakeTime;
