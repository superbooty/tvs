Application.cartItemCollection = Backbone.Collection.extend({
    model: Application.cartItemModel,
    localStorage: new Backbone.LocalStorage("CartItemCollection"),
    
    getCartTotals: function () {
    	var cartTotal = 0;
        var items = this.toJSON();
        items.forEach(function(e){
            var itemPrice = e.price;
            cartTotal += (itemPrice * e.qty);
        });
        return cartTotal;
    },

    getCartItemCount: function () {
    	var cartItemCount = 0;
        var items = this.toJSON();
        items.forEach(function(e){
        	cartItemCount += e.qty;
        });
        return cartItemCount;
    }

});
var cartItems = new Application.cartItemCollection();

