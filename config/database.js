var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

var db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}`);
});

module.exports = mongoose;