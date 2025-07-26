import { ModeToggle } from "@/components/mode-toggle";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-6 md:max-w-3xl mx-auto">
        <nav className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold tracking-tight">
            🍽️ Maname Thopulu Food Checklist
          </div>
          <ModeToggle />
        </nav>

        <p className="mb-4 text-muted-foreground text-sm">
          A curated list of food that makes us go 🤤 — forever remembered,
          hopefully never ruined.
        </p>

        <hr className="border-border mb-4" />

        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
