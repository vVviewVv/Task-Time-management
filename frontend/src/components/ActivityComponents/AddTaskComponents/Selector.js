import React from "react";
import {
  FormControl,
  Select,
  InputLabel,
  useTheme,
  MenuItem,
} from "@mui/material";
function Selector() {
  const theme = useTheme();
  const [inv, setInv] = React.useState("");
  const [open, setOpen] = React.useState(false);
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>admin1</MenuItem>
          <MenuItem value={20}>admin2</MenuItem>
          <MenuItem value={30}>admin3</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Selector;
