import { axiosHelper } from "../utils/axiosHelper";
import axios from "axios";

export async function fetchActivities() {
  return await axios.get("http://localhost:5000/tasks");
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
