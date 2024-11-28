import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      </div>
      <div className="mt-4">
        <Input placeholder="email address" />
      </div>
    </>
  );
};
