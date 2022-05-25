const router = require('express').Router();
const routes = require('/routes/apiRoutes/apiRoutes');

router.use(routes);

module.exports = router;