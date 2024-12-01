import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { QueryProvider } from "./Context/QueryProvider";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <AuthProvider>
          <QueryProvider>
            <RouterProvider router={routes} />
          </QueryProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
