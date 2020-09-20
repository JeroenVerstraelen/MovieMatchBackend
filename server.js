var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Person');
mobileApp.tables.add('Movie');
mobileApp.tables.add('PersonLikesMovie');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
