import { Hono } from 'hono';
import { cors } from 'hono/cors';
import groqSummarizer from './groq';

const app = new Hono();

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (c) => c.text('Hello from Bun + Hono + CORS! 🌐'));

app.post('/api/groq', async (c) => {
  const body = await c.req.json();

  const ocrData = body.ocrData;
  
  const { activity, notes } = await groqSummarizer(ocrData)
  return c.json({ activity: activity, notes: notes });
});

export default {
  port: 8080,
  fetch: app.fetch,
};
