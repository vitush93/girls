var $ = require('jquery');
var Templates = require('../templates');

module.exports = function (girl) {
    $.getJSON('http://localhost/girls/data/' + girl + '.json', function (data) {
        var html = Templates.detail({
            girl: girl,
            records: data
        });

        $('#js-records').html(html);
    });
};
