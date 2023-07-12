import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import AddTask from "../components/ActivityComponents/AddTask";
import Card from "../components/ActivityComponents/Card";
import UseWindowSize from "../hook/useWindowSize";

function Activity() {
  const windowSize = UseWindowSize();
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          mx: "auto",
          mt: "20px",
          mb: "20px",
        }}
      >
        <AddTask />
        <Box
          sx={{
            width: "1",
            mt: "20px",
            flexDirection: "row",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            sx={{ mb: "5px" }}
          >
            <Typography
              sx={{
                fontSize:
                  windowSize.width > 1100
                    ? 20
                    : windowSize.width > 720
                    ? 18
                    : 16,
                fontWeight: 500,
              }}
            >
              {/* {new Date().toDateString() == new Date(value?.date).toDateString()
          ? "Today"
        : dateMonthNameFullYear(value?.date)} */}
              Today
            </Typography>
            <Typography
              sx={{
                fontSize:
                  windowSize.width > 1100
                    ? 18
                    : windowSize.width > 720
                    ? 16
                    : 14,
              }}
            >
              {/* {new Date().toDateString() == new Date(value?.date).toDateString()
          ? "Today"
        : dateMonthNameFullYear(value?.date)} */}
              Total work hours: 8 hr 30 min
            </Typography>
          </Stack>
          <Card />
        </Box>
      </Stack>
    </>
  );
}

export default Activity;
