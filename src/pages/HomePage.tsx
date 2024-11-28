import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="muted">Link</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled variant="teritary">
          Territary
        </Button>
        <Link to="/sign-in">Sign in</Link>
      </div>
      <div className="mt-4">
        <Input placeholder="email address" />
      </div>
    </>
  );
};
