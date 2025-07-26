import { createFileRoute } from "@tanstack/react-router";
import foods from "@/data/foods.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-sm space-y-3">
      <ul className="list-disc space-y-2 pl-5">
        {foods.map((food) => (
          <li key={food.id}>
            {food.name}, {food.place.trim().replace(/,\s*$/, "")},{" "}
            {food.location}
            {food.googleMapsUrl && (
              <a
                href={food.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:underline hover:underline-offset-2"
                aria-label={`Map link for ${food.name}`}
              >
                📍
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
