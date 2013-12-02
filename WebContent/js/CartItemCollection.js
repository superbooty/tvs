Application.CartItemCollection = Backbone.Collection.extend({
  model: Application.CartItemModel,
  localStorage: new Backbone.LocalStorage("CartItemCollection")
});
Application.cartItemCollection = new Application.CartItemCollection();
