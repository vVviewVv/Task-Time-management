import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button } from "@mui/material";

import { useQuery } from "react-query";

import AddTask from "../components/ActivityComponents/AddTask";
import Card from "../components/ActivityComponents/Card";
import UseWindowSize from "../hook/useWindowSize";
import { EditModal, DeleteModal } from "../components/ActivityComponents";
import { useMutation, useQueryClient } from "react-query";
import { fetchActivities, fetchAddTask } from "../fetch/fecthActivity";
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

  const queryClient = new useQueryClient();
  // const activitiesQueries = useQueries(
  //   days?.map((d) => {
  //     return {
  //       queryKey: ["activities", new Date(d.date).toDateString()],
  //       queryFn: () => fetchActivities(d.date),
  //     };
  //   }),
  //   {
  //     enabled: !totalWorkHoursLoading,
  //   }
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
      {/* <Button onClick={() => mutate(Task)}>tast</Button> */}
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
      </Stack>
    </>
  );
}

export default Activity;
