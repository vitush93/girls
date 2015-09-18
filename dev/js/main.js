
var Backbone = require('backbone');
var Templates = require('./templates');
var $ = require('jquery');
var Router = require('./router');


require('./bindings/addDialog')();


$('body').on('click', '.js-navigation', function (e) {
    e.preventDefault();

    var href = $(this).attr('href');
    Backbone.history.navigate(href, {trigger: true});
});

var router = new Router();

Backbone.history.start({
    pushState: true,
    root: '/girls'
});
