import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
app.get("/health", (c) => {
  return c.json({ message: "ok", success: true }, 200);
});

export default {
  port: 3000,
  fetch: app.fetch,
};
