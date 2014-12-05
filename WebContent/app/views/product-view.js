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
      this.render();
    },
    
    render: function () {
      this.$el.html(this.template({"product": this.product}));
      return this;
    }
  });
  
  return ProductView;
});