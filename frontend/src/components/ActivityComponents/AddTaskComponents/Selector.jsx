import React, { useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  useTheme,
  MenuItem,
} from "@mui/material";
function Selector({ inv, setInv }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setInv(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <FormControl
        color="inputColor"
        sx={{ minWidth: 200, mb: "7px" }}
        size="small"
      >
        <InputLabel
          id="demo-controlled-open-select-label"
          sx={{ color: theme.palette.custom.white }}
        >
          Investment
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={inv}
          label="Investment"
          onChange={handleChange}
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <MenuItem value={"Business Trip"}>Business Trip</MenuItem>
          <MenuItem value={"Idle Time"}>Idle Time</MenuItem>
          <MenuItem value={"Learning"}>Learning</MenuItem>
          <MenuItem value={"Innovation"}>Innovation</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Selector;
