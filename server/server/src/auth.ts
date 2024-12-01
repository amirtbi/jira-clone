import { Hono } from 'hono'

const app = new Hono();

app.post("/login/:userId", async (c) => {
    const { email, password } = await c.req.json();
    return c.json({ email, password })
})

app.post("/register", async (c) => {
    const { name, email, password } = await c.req.json();
    return c.json({ name, email, password })
})
export default app;