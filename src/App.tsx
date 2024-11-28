import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
