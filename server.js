const http = require("node:http");

const host = "0.0.0.0";
const port = Number(process.env.PORT || 3000);

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>dotcom preview</title>
</head>
<body>
  <main>
    <h1>dotcom PR preview test</h1>
    <p>Coolify preview deployment is working.</p>
  </main>
</body>
</html>`;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
  });

  response.end(page);
});

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
