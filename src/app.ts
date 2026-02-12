import { handleWebhook } from "./webhook/handler.ts";

const PORT = 8000;

console.log(`Server running on http://localhost:${PORT}`);

Deno.serve(
  { port: PORT },
  async (request) => {
    const { pathname } = new URL(request.url);
    console.log(`Received request: ${request.method} ${pathname}`);
    if (request.method === "POST" && pathname === "/webhook") {
      console.log("Handling webhook request");
      const body = await request.json();
      await handleWebhook(body);
      return new Response(null, { status: 200 });
    }
    return new Response(null, { status: 404 });
  },
);
