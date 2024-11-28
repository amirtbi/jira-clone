import { LayoutWrapper } from "@/layouts/LayoutWrapper";
import { HomePage } from "@/pages/HomePage";
import { SignInPage } from "@/pages/SignInPage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: "/sign-in",
        element: <SignInPage />,
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
]);
