# Deno Telegram Webhook

This project is a simple Deno application that sets up a webhook for a Telegram bot. It listens for incoming messages and processes them accordingly.

## Project Structure

```
deno-telegram-webhook
├── src
│   ├── app.ts          # Entry point of the application
│   ├── webhook
│   │   └── handler.ts  # Handles incoming webhook requests
│   └── types
│       └── index.ts    # Type definitions for Telegram data
├── deno.json           # Deno configuration file
├── .env.example        # Example environment variables
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd deno-telegram-webhook
   ```

2. **Install Deno:**

   Follow the instructions on the [Deno website](https://deno.land/) to install Deno.

3. **Create a `.env` file:**

   Copy the `.env.example` to `.env` and fill in your Telegram bot token and webhook URL.

   ```bash
   cp .env.example .env
   ```

4. **Run the application:**

   Use the following command to run the application:

   ```bash
   deno run --allow-net --allow-read --allow-env src/app.ts
   ```

## Usage

Once the server is running, set your webhook URL with the Telegram API:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" -d "url=<YOUR_WEBHOOK_URL>"
```

Replace `<YOUR_BOT_TOKEN>` with your bot's token and `<YOUR_WEBHOOK_URL>` with the URL where your webhook is hosted.

## Deployment

To deploy this webhook, you can use platforms that support Deno, such as Deno Deploy or any cloud service that allows you to run Deno applications. Make sure to configure your environment variables correctly in the deployment environment.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for this project.