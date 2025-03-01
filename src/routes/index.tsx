import { RouteObject } from "react-router";
import LoginPage from "../page/auth/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
