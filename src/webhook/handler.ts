export async function handleWebhook(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const body = await request.json();
  console.debug("Webhook payload received:", body.toString().substring(0, 200));
  // Extract message data from the incoming webhook
  const message = body.message;
  console.debug("Extracted message:", message);
  if (message) {
    const chatId = message.chat.id;
    const text = message.text;
    // Here you can add logic to respond to the message or perform actions
    console.log(`Received message from chat ${chatId}: ${text}`);
    // Example response (you can customize this)
    return new Response(JSON.stringify({ status: "success" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Bad Request", { status: 400 });
}
