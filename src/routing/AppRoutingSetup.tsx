import { RequireAuth } from "@/auth";
import { ResetPassword } from "@/auth/pages/jwt";
import { ErrorsRouting } from "@/errors";
import { Demo6Layout } from "@/layout/demo6";
import AdminCountryPage from "@/page/pages/admin.country";
import LoginPage from "@/page/pages/auth/loginPage";
import HomePage from "@/page/pages/homePage";
import { ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router";

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo6Layout />}>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/admin/country" element={<AdminCountryPage />} />
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRoutingSetup };
