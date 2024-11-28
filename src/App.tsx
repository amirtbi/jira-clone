import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
