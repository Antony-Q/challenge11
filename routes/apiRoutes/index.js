const router = require('express').Router();
const routes = require('./apiRoutes');

router.use(routes);

module.exports = router;