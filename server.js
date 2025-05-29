const { create, router, defaults } = require("json-server");
const server = create();
const routes = router("db.json");
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(routes);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
