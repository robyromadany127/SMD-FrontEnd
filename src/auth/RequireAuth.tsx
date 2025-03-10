import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ScreenLoader } from "@/components/loaders";

import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth, loading, verify } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <ScreenLoader />;
  }

  useEffect(() => {
    verify();
  }, []);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export { RequireAuth };
