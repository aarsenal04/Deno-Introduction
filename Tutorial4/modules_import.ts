import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
serve((req) => new Response("Hello from Deno!"));

// This code creates a server that responds with "Hello from Deno!" to all requests
// deno run --allow-net modules_import.ts
// go to http://localhost:8000 in the browser and see the message "Hello from Deno!"