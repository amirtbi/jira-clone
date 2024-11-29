import { useAuth } from "@/Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpCard } from "../SignInPage/components/SignupCard";

export const SignUpPage = () => {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <SignUpCard />
    </>
  );
};
