import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Provider from "./components/provider/Provider";
import Login from "./components/authentication/Login";
import Layout from "./components/layout/Layout";
import generalTheme from "./theme";
import SignalHandler from "./components/layout/SignalHandler";

// const REACT_APP_SITE_URL = process.env.REACT_APP_SITE_URL;

const App = () => (
  <Provider>
    <ThemeProvider theme={generalTheme}>
      <div className="root" data-testid="app_test_id">
        <SignalHandler />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="" element={<Layout />} />
            <Route element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  </Provider>
);

export default App;
