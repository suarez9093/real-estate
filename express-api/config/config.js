var config = {};
var DBHOST = "mongodb+srv://michaeladamstrickland:BigStrick247@cluster-real-estate-iavcj.mongodb.net/test?retryWrites=true&w=majority"

config.dbhost = process.env.DBHOST || "mongodb+srv://michaeladamstrickland:BigStrick247@cluster-real-estate-iavcj.mongodb.net/test?retryWrites=true&w=majority";
config.host = process.env.HOST || 'http://localhost';

module.exports = config;
