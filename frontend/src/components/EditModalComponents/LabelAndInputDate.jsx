import { Typography, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers/";

export default function LabelAndInputDate({ taskDate, setTaskDate }) {
  return (
    <tr>
      <td>
        <Typography fontWeight={500} textAlign={"right"}>
          Date
        </Typography>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={taskDate}
            inputFormat={"dd/MM/yyyy"}
            maxDate={new Date()}
            onChange={(newValue) => {
              setTaskDate(new Date(newValue));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ ml: 2, width: 1 }}
                size="small"
                error={
                  taskDate.getFullYear() <= 1970 || taskDate == "Invalid Date"
                }
              />
            )}
          />
        </LocalizationProvider>
      </td>
    </tr>
  );
}
