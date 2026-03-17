const port = Number(process.env.PORT) || 3000;
Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/healthz') return new Response('ok');
    return Response.json({ runtime: 'bun', status: 'ok', cache: 'auth-basic-v4' });
  },
});
console.log(`bun server on ${port}`);
