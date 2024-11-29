import { useAuth } from "@/Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignInCard } from "./components/SignInCard";

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
      <SignInCard />
    </>
  );
};
