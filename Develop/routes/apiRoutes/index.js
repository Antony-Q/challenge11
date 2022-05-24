const router = require('express').Router();
const noteRoutes = require('./routes');

router.use(routes);

module.exports = router;