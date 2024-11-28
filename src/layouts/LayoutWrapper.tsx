import { useAuth } from "@/Context/AuthContext";
import { AfterLoginLayout } from "./afterLoginLayout";
import { BeforeLoginLayout } from "./BeforeLoginLayout";

export const LayoutWrapper = () => {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };
  return <>{isAuthenticated ? <AfterLoginLayout /> : <BeforeLoginLayout />}</>;
};
