var $ = require('jquery');
var Templates = require('../templates');

module.exports = function () {
    $.getJSON('http://localhost/girls/data/records.json', function (data) {
        var empty = data.length == 0;

        var html = Templates.records({
            records: data,
            empty: empty
        });

        $('#js-records').html(html);
    });
};
