import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./navigation/Layout";

import LoginPage from "./pages/Auth";
import SignupPage from "./pages/User";
import BeforePage from "./pages/Before";
import ListPage from "./pages/List";
import InfoPage from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BeforePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/list" element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;