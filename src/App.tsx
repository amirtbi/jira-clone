import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
