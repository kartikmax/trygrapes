import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Calls from "./pages/Calls";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LeadProfile from "./pages/Sales/LeadProfile";
import { Widget } from "./pages/Widgets";
import { NotFound } from "./pages/NotFound";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Signup from "./pages/Login/Signup";
import AddNote from "./pages/Sales/AddNote";
import { useState, useEffect } from "react";
import SalesOpen from "./pages/Sales/Open";
// import { useLocation } from "react-router-dom";

function App() {
  const [val, setVal] = useState(true);

  useEffect(() => {
    if (["/signup", "/login"].includes(window.location.pathname)) {
      setVal(false);
    }
  }, []);

  return (
    <>
      <Box>
        <CssBaseline />
        <div style={{ margin: "0 0 0 9rem" }}>
          <Router>
            {val && <Navbar />}
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/widget' element={<Widget />} />
              <Route path='/calls' element={<Calls />} />
              <Route path='/sales/lead_profile' element={<LeadProfile />} />
              <Route path='/sales/open' element={<SalesOpen />} />
              <Route path='/sales/closed' element={<AddNote />} />
              <Route path='*' element={<NotFound />} />
              {/* Redirect the index route to /signup */}
              <Route
                path='/'
                element={<Navigate to='/login' replace />}
                index
              />
            </Routes>
          </Router>
        </div>
      </Box>
    </>
  );
}

export default App;
