import { Demo6Layout } from "@/layout/demo6";
import LoginPage from "@/page/auth/loginPage";
import HomePage from "@/page/homePage";
import { ReactElement } from "react";
import { Route, Routes } from "react-router";

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route>
        <Route element={<Demo6Layout />}>
          <Route path="/dashboard" element={<HomePage />} />
        </Route>
      </Route>
      {/* <Route path="error/*" element={<ErrorsRouting />} /> */}
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="*" element={<Navigate to="/error/404" />} /> */}
    </Routes>
  );
};

export { AppRoutingSetup };
