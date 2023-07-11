import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Activity from "./pages/Activity";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/activity" replace />} />
          <Route path=":projectDate" element={<Activity />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/error500" element={<InternalError />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
