/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Root from "./Root";

const MainLayout = React.lazy(
  () => import("../layouts/MainLayout"),
);
const HomeLayout = React.lazy(
  () => import("../layouts/HomeLayout"),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<HomeLayout />}>
        <Route path='' element={<HomePage />} />
      </Route>

      <Route path='home' element={<HomeLayout />}>
        <Route path='' element={<HomePage />} />
      </Route>
    </Route>,
  ),
);
