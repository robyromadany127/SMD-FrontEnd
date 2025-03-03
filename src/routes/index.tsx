import { RouteObject } from "react-router";
import LoginPage from "../page/auth/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/page/homePage";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
