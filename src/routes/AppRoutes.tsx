import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../components/routing/PrivateRoute";
import PublicRoute from "../components/routing/PublicRoute";
import ProtectedRoutes from "../components/routing/ProtectedRoutes";
import React, { lazy, Suspense } from "react";
import { BarsLoader } from "../components/loader/Loader";

const AppRoutes: React.FC<any> = () => {
  const LoginPage = lazy(() => import("../pages/login/login"));
  const ForgotPassword = lazy(
    () => import("../pages/forgot-password/forgot-password")
  );
  const isAuth = false;
  return (
    <Suspense fallback={<BarsLoader />}>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isAuth}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute isAuth={isAuth}>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/protected"
          element={
            <PrivateRoute isAuth={isAuth}>
              <ProtectedRoutes />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
