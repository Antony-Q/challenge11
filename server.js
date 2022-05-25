const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/apiRoutes", apiRoutes);
app.use("/htmlRoutes", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT} || http://localhost:${PORT}`);
})