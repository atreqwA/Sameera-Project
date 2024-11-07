
import { Groq } from "groq-sdk";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Initialize Groq with your API key
const groq = new Groq({
  apiKey: "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",
});

// Get the current directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
const PORT = 5004;

// Serve HTML content directly from server.js
app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Groq Chat Interface</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            textarea { width: 100%; height: 100px; }
            #response { white-space: pre-wrap; }
        </style>
    </head>
    <body>
        <h1>Groq Chat Interface</h1>
        <form id="chatForm">
            <textarea id="messageInput" placeholder="Enter your message here"></textarea><br>
            <button type="submit">Send</button>
        </form>
        <h2>Response:</h2>
        <div id="response"></div>

        <script>
            document.getElementById('chatForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const message = document.getElementById('messageInput').value;
                const response = document.getElementById('response');
                response.textContent = 'Loading...';

                try {
                    const res = await fetch('/api/chat-complete', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            messages: [{ role: 'user', content: message }],
                            model: 'mixtral-8x7b-32768',
                            temperature: 0.5,
                            max_tokens: 1024,
                            top_p: 1,
                            stream: true,
                            stop: null
                        }),
                    });

                    const reader = res.body.getReader();
                    const decoder = new TextDecoder();
                    response.textContent = '';

                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        response.textContent += decoder.decode(value);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    response.textContent = 'An error occurred while processing your request.';
                }
            });
        </script>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

// Endpoint for chat completion
app.post("/api/chat-complete", async (req, res) => {
  try {
    const { messages, model, temperature, max_tokens, top_p, stream, stop } = req.body;
    
    const chatCompleteness = await groq.chat.completions.create({
      messages,
      model,
      temperature,
      max_tokens,
      top_p,
      stream,
      stop,
    });

    res.setHeader("Content-Type", "text/plain");
    let responseText = '';

    // Stream response
    for await (const chunk of chatCompleteness) {
      responseText += chunk.choices[0]?.delta?.content || "";
    }
    
    res.send(responseText);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
