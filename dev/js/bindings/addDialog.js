var _ = require('underscore');
var $ = require('jquery');

function toggleDialog() {
    $('#fade').toggle();
    $('#modal-container').toggle();
    $('body').toggleClass('modal');
}

function hideDialog() {
    $('#fade').hide();
    $('#modal-container').hide();
    $('body').removeClass('modal');
}

module.exports = function () {

    $.getJSON('http://localhost/girls/data/girls.json', function (data) {
        _.each(data, function (girl) {
            $('#js-girls').append('<span class="girl-select">' + girl.name + '</span>')   ;
        });
    });

    $('#add-button').click(function (e) {
        e.preventDefault();

        toggleDialog();
    });

    $('#modal-container').click(function (e) {
        if (e.target.id != "modal-dialog" && !$(e.target).parents("#modal-dialog").size()) {
            hideDialog();
        }
    });
};


