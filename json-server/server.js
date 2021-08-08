const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 2900;
const auth = require('json-server-auth');

server.db = router.db;

server.use(middlewares);
const rules = auth.rewriter({
    home: 660,
    // submissions: 660,
    // form: 660,
});

server.use(rules)
server.use(auth);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running at http://localhost:2900/')
});
