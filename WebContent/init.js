var Application = window.Application ={};
_.extend(window.Application, Backbone.Events);

var start = function() {
    cartItems.fetch({
        success: function() {
            Application.trigger('ready');
        }
    });
};




