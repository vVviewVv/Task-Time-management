import { Typography, TextField } from "@mui/material";

export default function LabelAndInputTaskDetails({
  taskDetails,
  setTaskDetails,
}) {
  return (
    <tr>
      <td>
        <Typography fontWeight={500} textAlign={"right"}>
          Details
        </Typography>
      </td>
      <td>
        <TextField
          placeholder="Enter some task details"
          size="small"
          variant="outlined"
          multiline
          rows={3}
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          sx={{ width: 1, mb: 1, ml: 2 }}
        />
      </td>
    </tr>
  );
}
