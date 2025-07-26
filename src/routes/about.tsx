import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, laboriosam
      porro pariatur amet qui nihil doloribus. Quos sit iste iusto illo
      molestias assumenda ipsum voluptates, exercitationem iure placeat nobis
      fugit.
    </div>
  );
}
