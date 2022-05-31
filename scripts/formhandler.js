(function (window) {
    'use strict';
    let App = window.app || {};
    let $ = window.jQuery;

    function Formhandler(selector) {
        if(!selector) {
            throw new Error('no selector provided!');
        }
    }

    App.Formhandler = Formhandler;
    window.app = App;
})(window);