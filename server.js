const express = require('express');
const port = process.env.PORT || 3001
const app = express();

const apiRoutes = require('/apiRoutes');
const htmlRoutes = require('/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/apiRoutes", apiRoutes);
app.use("/htmlRoutes", htmlRoutes);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });