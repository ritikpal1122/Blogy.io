import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { bookRouter } from './routes/blog';
export const app = new Hono();
app.route('/api/v1/user', userRouter);
app.route('/api/v1/book', bookRouter);
export default app;
