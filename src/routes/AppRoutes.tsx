import { LayoutWrapper } from "@/layouts/LayoutWrapper";
import { HomePage } from "@/pages/HomePage/HomePage";
import { SignInPage } from "@/pages/SignInPage/SignInPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import { ErrorPage } from "@/pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/",
        element: <ProtectedRoute element={<HomePage />} />,
      },
      {
        path: "/home",
        element: <ProtectedRoute element={<HomePage />} />,
      },
    ],
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
]);
