import { Outlet } from "react-router-dom";
export const AfterLoginLayout = () => {
  return (
    <>
      <main>
        <h1>welcome</h1>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
