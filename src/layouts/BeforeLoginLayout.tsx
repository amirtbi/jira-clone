import { Link, Outlet } from "react-router-dom";

export const BeforeLoginLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        <nav className="h-10 bg-red-500 w-full">
          <Link to="/home">Home</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
