import { useAuth } from "@/Context/AuthContext";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };
  return <>{isAuthenticated ? element : <Navigate to="/sign-in" />}</>;
};
