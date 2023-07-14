import React from "react";
import { TextField, useTheme, Stack } from "@mui/material";

function TakeTime({ hours, setHours, minutes, setMinutes }) {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <TextField
        id="outlined-number"
        label="Hours"
        type="number"
        size="small"
        value={hours}
        color="inputColor"
        onChange={(e) => {
          if (e.target.value > 23) e.target.value = 23;
          else if (e.target.value < 0) e.target.value = 0;
          setHours(e.target.value);
        }}
        InputProps={{ inputProps: { min: 0, max: 23 } }}
        InputLabelProps={{
          shrink: true,
          style: { color: theme.palette.custom.white },
          maxLength: 23,
          minLength: 0,
        }}
        sx={{
          input: { color: "white", borderColor: "red" },
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      />

      <TextField
        id="outlined-number"
        label="Minutes"
        type="number"
        color="inputColor"
        value={minutes}
        onChange={(e) => {
          if (e.target.value > 59) e.target.value = 59;
          else if (e.target.value < 0) e.target.value = 0;
          setMinutes(e.target.value);
        }}
        InputProps={{ inputProps: { min: 0, max: 59 } }}
        InputLabelProps={{
          shrink: true,
          style: { color: theme.palette.custom.white },
        }}
        sx={{
          input: { color: theme.palette.custom.white },
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        size="small"
      />
    </Stack>
  );
}

export default TakeTime;
