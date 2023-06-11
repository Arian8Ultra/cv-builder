/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "../pages/Home/HomePage";
import HomeLayout from "../layouts/HomeLayout";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<HomeLayout />}>
        <Route path='' element={<HomePage />} />
      </Route>

      <Route path='home' element={<HomeLayout />}>
        <Route path='home' element={<HomePage />} />
        <Route path='home/:id' element={<HomePage />} />
      </Route>
    </Route>,
  ),
);
