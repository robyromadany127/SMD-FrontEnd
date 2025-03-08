import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ScreenLoader } from "@/components/loaders";

import { useAuthContext } from "./useAuthContext";

const RequireAuth = () => {
  const { auth, loading } = useAuthContext();
  console.log("auth", auth, "loading", loading);
  const location = useLocation();

  if (loading) {
    return <ScreenLoader />;
  }

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export { RequireAuth };
