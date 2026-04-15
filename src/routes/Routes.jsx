import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/homepage/Home";
import Status from "../components/statusPage/Status";
import TimeLine from "../components/timelinePage/TimeLine";
import Error from "../components/errorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: TimeLine,
      },
      {
        path: "/stats",
        Component: Status,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
