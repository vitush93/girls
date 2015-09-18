
var Backbone = require('backbone');
var HomeController = require('./controllers/HomeController');
var RecordsController = require('./controllers/RecordsController');

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'homeRoute',
        'records/:girl': 'girlRoute'
    },

    homeRoute: HomeController,

    girlRoute: RecordsController

});

module.exports = AppRouter;
