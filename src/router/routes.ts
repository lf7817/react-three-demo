import { Navigate } from "react-router-dom";
// import MainLayout from "@/layouts/MainLayout";
import User from "@/pages/User";
import Child from "@/pages/Child";
import Login from "@/pages/Login";
import ErrorPage from "@/pages/ErrorPage";
import { SoRouteObject } from "@/router/types";
import { convertRoutes } from "@/router/convertRoutes";
import BasicLayout from "@/layouts/BasicLayout";
import UserCreate from "@/pages/UserCreate";
import UserEdit from "@/pages/UserEdit";
import ChildCreate from "@/pages/ChildCreate";
import ChildEdit from "@/pages/ChildEdit";
import Post from "@/pages/Post";
import PostCreate from "@/pages/PostCreate";
import PostEdit from "@/pages/PostEdit";

const routes: SoRouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate replace to={"/post/list"} />,
      },
      {
        path: "/post",
        children: [
          {
            path: "/post",
            element: <Navigate replace to={"/post/list"} />,
          },
          {
            path: "list",
            element: <Post />,
          },
          {
            path: "create",
            element: <PostCreate />,
          },
          {
            path: "update/:id",
            element: <PostEdit />,
          },
        ]
      },
      {
        path: "/child",
        children: [
          {
            path: "/child",
            element: <Navigate replace to={"/child/list"} />,
          },
          {
            path: "list",
            element: <Child />,
          },
          {
            path: "create",
            element: <ChildCreate />,
          },
          {
            path: "update/:id",
            element: <ChildEdit />,
          },
        ]
      },
      {
        path: "/user",
        children: [
          {
            path: "/user",
            element: <Navigate replace to={"/user/list"} />,
          },
          {
            path: "list",
            element: <User />,
          },
          {
            path: "create",
            element: <UserCreate />,
          },
          {
            path: "update/:id",
            element: <UserEdit />,
          },
        ]
      },
    ],
  },
];

export default convertRoutes(routes);
