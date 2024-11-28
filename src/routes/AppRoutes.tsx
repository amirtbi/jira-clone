import { AfterLoginLayout } from "@/layouts/afterLoginLayout";
import { HomePage } from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AfterLoginLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
