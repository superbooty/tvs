
var cartCollection = Backbone.Collection.extend({
    model: cartModel,
    localStorage: new Backbone.LocalStorage("CartCollection")
});
var carts = new cartCollection();