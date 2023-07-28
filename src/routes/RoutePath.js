import React from "react";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/Permissions";
import Home from "../Components/Home";
import About from "../Components/About";
import Profile from "../Components/Profile";
import Extra from "../Components/Extra";
import Login from "../Components/Login";

const RoutePath = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />}
      >
        <Route path='about' element={<About/>} />
      </Route>
      <Route
        path='profile'
        element={
          <Authentication>
           <Profile/>
          </Authentication>
        }
      />
      <Route
        element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}
      >
        <Route path='extra' element={<Extra/>} />
      </Route>
      <Route path='login' element={<Login/>} />
    </Routes>
  );
};

export default RoutePath;
