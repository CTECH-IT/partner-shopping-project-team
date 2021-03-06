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

    Truck.prototype.deliverOrder = function (customerId) {
        console.log ('Delivering order for' + customerId) 
        this.db.remove(customerId);
    }

    Truck.prototype.printOrders = function () {
        let customerId = object.keys(this.db.getAll());

        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));

        console.log('Truck #' + this.truckId + ' has pending orders')
    }
    
    App.Truck = Truck;
    window.App = App;

})(window);
