(function (window) {
    'use strict';

    let App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }

    Truck.prototype.devilerOrder = function (customerId) {
        console.log ('Delivering order for' + customerId) 
        this.db.remove(customerId);
    }
    
    App.Truck = Truck;
    window.App = App;

})(window);
