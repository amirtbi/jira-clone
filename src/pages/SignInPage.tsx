import { useAuth } from "@/Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div>Sign in</div>
    </>
  );
};
