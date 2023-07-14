import { Stack, TextField, Typography } from "@mui/material";

export default function LabelAndInputTime({
  taskHours,
  taskMinutes,
  setTaskHours,
  setTaskMinutes,
}) {
  return (
    <>
      <tr>
        <td>
          <Typography textAlign={"right"} fontWeight={500} sx={{ my: 1 }}>
            Hours
          </Typography>
        </td>
        <td>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <TextField
              size="small"
              type="number"
              value={taskHours}
              onChange={(e) => {
                if (e.target.value > 23) e.target.value = 23;
                else if (e.target.value < 0) e.target.value = 0;
                setTaskHours(e.target.value);
              }}
              inputProps={{ inputProps: { min: 0, max: 24 } }}
              sx={{ width: 75, ml: 2 }}
            />
            <Typography fontWeight={500}>Minutes</Typography>
            <TextField
              size="small"
              type="number"
              value={taskMinutes}
              onChange={(e) => {
                if (e.target.value > 59) e.target.value = 59;
                else if (e.target.value < 0) e.target.value = 0;
                setTaskMinutes(e.target.value);
              }}
              inputProps={{ inputProps: { min: 0, max: 24 } }}
              sx={{ width: 75 }}
            />
          </Stack>
        </td>
      </tr>
    </>
  );
}
