import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button } from "@mui/material";

import { useQuery } from "react-query";

import AddTask from "../components/ActivityComponents/AddTask";
import Card from "../components/ActivityComponents/Card";
import UseWindowSize from "../hook/useWindowSize";
import { EditModal, DeleteModal } from "../components/ActivityComponents";
import { useMutation, useQueryClient, useQueries } from "react-query";
import { fetchActivities, fetchActivitiesByDay } from "../fetch/fecthActivity";
import { fecthToken } from "../fetch/fecthAuth";

function Activity() {
  const [projects, setProjects] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState([]);
  const windowSize = UseWindowSize();
  useEffect(() => {
    fecthToken();
  }, []);

  // const days = new Date().getMonth();
  // const date = new Date(new Date() - 86400000).setHours(0, 0, 0, 0);
  // // .toISOString()
  const date = [
    new Date("2023-07-14").toISOString(),
    new Date("2023-07-13").toISOString(),
    new Date("2023-07-12").toISOString(),
    new Date("2023-07-11").toISOString(),
    new Date("2023-07-10").toISOString(),
  ];
  const numbers = [0, 1, 2, 3, 4];

  // const activitiesQueries = useQueries(
  //   date?.map((d) => {
  //     return {
  //       queryKey: ["activities", new Date("2023-07-14").toISOString()],
  //       queryFn: () => fetchActivitiesByDay(d),
  //     };
  //   })
  // );
  const postsQuery = useQuery({
    queryKey: ["timetask"],
    queryFn: () => fetchActivities(),
    fetchPolicy: "cache-and-network",
  });
  useEffect(() => {}, [postsQuery]);

  const handleOpenEditModal = (task) => {
    setOpenEditModal(true);
    setTaskSelected(task);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setTaskSelected(null);
  };

  const handleOpenDeleteModal = (task) => {
    setOpenDeleteModal(true);
    setTaskSelected(task);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setTaskSelected(null);
  };
  return (
    <>
      <EditModal
        openEditModal={openEditModal}
        handleCloseEditModal={handleCloseEditModal}
        taskInputValue={taskSelected}
      />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        task={taskSelected}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />
      <Stack
        sx={{
          alignItems: "center",
          mx: "auto",
          mt: "20px",
          mb: "20px",
        }}
      >
        <AddTask />
        {/* {numbers.map((index) => */}
        {/* activitiesQueries[index].data?.map((task) => ( */}
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
              {/* Today */}
              {/* {new Date(date[index]).getDate() +
                "/" +
                new Date(date[index]).getMonth() +
                "/" +
                new Date(date[index]).getFullYear()} */}
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
          {/* <Card
                task={task}
                handleOpenEditModal={handleOpenEditModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
              /> */}
          {postsQuery.data?.map((task) => {
            return (
              <Card
                task={task}
                handleOpenEditModal={handleOpenEditModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
              />
            );
          })}
        </Box>
        {/* )) */}
        {/* )} */}
      </Stack>
    </>
  );
}

export default Activity;
