import { createTheme } from "@mui/material";

export const themeApp = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: { main: "#16808c", contrastText: "#F7F7FD" },
    custom: {
      primary: "#16808c",
      lightPrimary: "#55b0bc",
      darkPrimary: "#36808c",
      background: "#E7E7E7",
      white: "#F7F7FD",
      defaultTextColor: "#363062",
      red: "#E70000",
      grey: "#AAAAAA",
      edit: "#FFC061",
      duplicate: "#5185EC",
      delete: "#E21818",
      yes: "#35A700",
      black: "#3A3A3A",
    },
    confirmBtn: {
      main: "#16808c",
      hover: "#E21818",
      contrastText: "#F7F7FD",
    },
    addBtn: {
      main: "#E75050",
      contrastText: "#F7F7FD",
      hover: "#E21818",
    },
    inputColor: {
      main: "#F7F7FD",
    },
  },
});
