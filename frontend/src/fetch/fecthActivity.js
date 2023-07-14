export async function fetchActivities() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/activity/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function fetchActivitiesByDay(data) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:5000/activity/getTasksByDay",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function fetchAddTask(data) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/activity/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function fetchUpdateActivity(data) {
  try {
    const response = await fetch(
      "http://localhost:5000/activity/edit/" + data._id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function fetchDeleteActivity(data) {
  try {
    const response = await fetch("http://localhost:5000/activity/" + data, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// export async function fetchTotalHours(projectId, startDate, endDate) {
//   return await axiosHelper.get("/api/Activity/select/TotalHours", {
//     projectId: projectId,
//     startDate: startDate,
//     endDate: endDate,
//   });
// }

// export async function fetchProjectInMonth(month, year) {
//   return await axiosHelper
//     .get("/api/Activity/select/project/month/year", {
//       month: month,
//       year: year,
//     })
//     .then((res) => {
//       let temp = [];
//       const COLORS = colorsForCard;
//       let projectColors = [];

//       for (let i = 0; i < getDaysInMonth(new Date(year, month - 1, 1)); i++) {
//         let project = [];
//         res.data[i].forEach((p) => {
//           if (p.projectId !== 0) {
//             if (!projectColors.find((d) => d.projectId === p.projectId)) {
//               projectColors.push({
//                 projectId: p.projectId,
//                 projectName: p.projectName,
//                 color:
//                   projectColors.length === COLORS.length
//                     ? defaultColorForTooManyProject
//                     : COLORS[projectColors.length],
//               });
//             }
//             let color = projectColors.find(
//               (d) => d.projectId === p.projectId
//             ).color;
//             project.push({ ...p, color });
//           }
//         });
//         if (project) {
//           temp.push(project);
//         } else {
//           temp.push([]);
//         }
//       }
//       return { data: temp, projectColors: projectColors };
//     });
// }

// export async function fetchSchedule(startDate, endDate) {
//   return await axiosHelper
//     .get("/api/Activity/select/Schedule", {
//       startDate: startDate,
//       endDate: endDate,
//     })
//     .then((r) => r.data);
// }
// export async function fetchProjectEmployee() {
//   return await axiosHelper
//     .get("/api/Activity/select/project/employee")
//     .then((r) => r.data);
// }

// export async function fetchInsertActivity(newActivity) {
//   return await axiosHelper.post("/api/Activity/insert", {
//     activityId: newActivity.ActivityId,
//     hours: newActivity.Hours,
//     detail: newActivity.Detail,
//     workFromHome: newActivity.WorkFromHome,
//     employeeId: newActivity.EmployeeId,
//     projectId: newActivity.ProjectId,
//     date: newActivity.Date,
//     minutes: newActivity.Minutes,
//     startTime: newActivity.StartTime,
//     endTime: newActivity.EndTime,
//     status: newActivity.Status,
//   });
// }
// export async function fetchUpdateActivity(newActivity) {
//   return await axiosHelper.post("/api/Activity/update", newActivity);
// }
// export async function fetchDeleteActivity(activityId) {
//   return await axiosHelper.get("/api/Activity/delete", {
//     activityId,
//   });
// }
// export async function fetchEmployeeID() {
//   return await axiosHelper.get("/api/Activity/emp").then((d) => d.data);
// }
// export async function fetchTotalWorkHoursInDay(date) {
//   return await axiosHelper
//     .get("/api/Activity/select/TotalWorkHoursInDay", {
//       date: date,
//     })
//     .then((r) => r?.data?.[0]);
// }
