import { handleWebhook } from "./webhook/handler.ts";

const PORT = 8000;

console.log(`Server running on http://localhost:${PORT}`);

Deno.serve(
  { port: PORT },
  async (request) => {
    const { pathname } = new URL(request.url);
    if (request.method === "POST" && pathname === "/webhook") {
      const body = await request.json();
      await handleWebhook(body);
      return new Response(null, { status: 200 });
    }
    return new Response(null, { status: 404 });
  },
);
