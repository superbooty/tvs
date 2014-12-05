define([
  "jquery",
  "underscore",
  "backbone",
  "models/product",
  "hbs!tmpl/ProductView"
], function (
  $,
  _,
  Backbone,
  Product,
  productTemplate
  ) {
    
  var ProductView = Backbone.View.extend({
    className: "shelf_item",
    tagName: "div",
    template: productTemplate,

    initialize: function (options) {
      this.product = options.model.toJSON();
      this.product.dispPrice = this.getDispPrice(this.product.price);
      this.render();
    },
    
    getDispPrice: function(price) {
      var splitPrice =  price.toString().split(".");
      if(!splitPrice[1]) {
          splitPrice[1] = "00";
      }
      return {dollars: splitPrice[0], cents:splitPrice[1]};
    },

    render: function () {
      this.$el.html(this.template({"product": this.product}));
      return this;
    }
  });
  
  return ProductView;
});