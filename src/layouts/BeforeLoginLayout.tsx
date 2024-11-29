import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation } from "react-router-dom";

export const BeforeLoginLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
          <nav className="flex items-center justify-between">
            <img src="/logo.svg" width={152} height={56} alt="logo" />
            <Button variant="secondary"></Button>
            <Link to={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
              {pathname === "/sign-up" ? "Sign In" : "Sign Up"}
            </Link>
          </nav>
          <div className="flex flex-col pt-4 md justify-center md:pt-14 items-center">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
