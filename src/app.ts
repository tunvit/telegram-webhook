import { serve } from "server";
import { handleWebhook } from "./webhook/handler.ts";

const PORT = 8000;

console.log(`Server running on http://localhost:${PORT}`);

serve(
  async (request) => {
    if (request.method === "POST" && request.url === "/webhook") {
      const body = await request.json();
      await handleWebhook(body);
      return new Response(null, { status: 200 });
    }
    return new Response(null, { status: 404 });
  },
  { port: PORT },
);
