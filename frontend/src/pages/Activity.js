import React, { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";

import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import AddTask from "../components/ActivityComponents/AddTask";
import Card from "../components/ActivityComponents/Card";
import UseWindowSize from "../hook/useWindowSize";

import { fetchActivities } from "../fetch/fecthActivity";
import { fecthToken } from "../fetch/fecthAuth";

function Activity() {
  useEffect(() => {
    fecthToken();
  }, []);
  const windowSize = UseWindowSize();
  const { isLoading, error, data } = useQuery("repoData", () => {
    return fetchActivities();
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
              Total work hours: - hr - min
            </Typography>
          </Stack>
          {/* {data.data?.map((tasks) => {
            return <Card />;
          })} */}
        </Box>
        {/* {status == "success" &&
          data.data?.map((post, index) => {
            return <li key={index}>{post.EmployeeId}</li>;
          })} */}
      </Stack>
    </>
  );
}

export default Activity;
