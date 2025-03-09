import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ScreenLoader } from "@/components/loaders";

import { useAuthContext } from "./useAuthContext";

const RequireAuth = () => {
  const { auth, loading, currentUser } = useAuthContext();
  console.log("currentUser", currentUser);
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
