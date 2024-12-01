import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import authRoute from "./auth";
const app = new Hono().basePath("/api")



app.use('/*', cors())

app.route("/auth", authRoute);


const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
