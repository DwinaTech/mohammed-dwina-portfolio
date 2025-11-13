import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("education", "./routes/education.tsx"),
  route("experience", "./routes/experience.tsx"),
  // route("projects", "./routes/projects.tsx"),
] satisfies RouteConfig;
