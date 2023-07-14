import { Typography, FormControl, Select, MenuItem } from "@mui/material";

export default function ProjectSelector({ taskProject, setTaskProject }) {
  return (
    <tr>
      <td>
        <Typography textAlign={"right"} fontWeight={500}>
          Project
        </Typography>
      </td>
      <td>
        <FormControl
          sx={{ width: 1, minWidth: 170, my: 1, ml: 2 }}
          size="small"
        >
          <Select
            value={taskProject}
            onChange={(e) => {
              setTaskProject(e.target.value);
            }}
          >
            <MenuItem value={"Business Trip"}>Business Trip</MenuItem>
            <MenuItem value={"Idle Time"}>Idle Time</MenuItem>
            <MenuItem value={"Learning"}>Learning</MenuItem>
            <MenuItem value={"Innovation"}>Innovation</MenuItem>
          </Select>
        </FormControl>
      </td>
    </tr>
  );
}
