import { handleWebhook } from "./webhook/handler.ts";

const PORT = 8000;

console.log(`Server running on http://localhost:${PORT}`);

Deno.serve({ port: PORT }, async (request) => {
  const { pathname } = new URL(request.url);
  console.log(`Received request: ${request.method} ${pathname}`);
  if (request.method === "POST" && pathname === "/webhook") {
    console.log("Handling webhook request", request);
    try {
      console.debug("Parsing request body");
      const body = await request.json();
      console.debug("Request body parsed", body);
      await handleWebhook(body);
    } catch (e) {
      console.error(`Error handling webhook`, e);
    }
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 404 });
});
