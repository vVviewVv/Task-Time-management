import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts/";

function Chart() {
  const theme = useTheme();
  return (
    <>
      <Stack>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={600}
          height={250}
        />
        <Stack direction={"row"}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={350}
            height={150}
          />
          {/* <Box>
            <Typography>Business Trip</Typography>
            <Typography>Idle Time</Typography>
            <Typography>Learning</Typography>
            <Typography>Innovation</Typography>
          </Box> */}
        </Stack>
      </Stack>
    </>
  );
}

export default Chart;
