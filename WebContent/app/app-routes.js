define([
  "jquery",
  "underscore",
  "backbone",
  "views/product-page-view"
], function (
  $,
  _,
  Backbone,
  ProductPageView
  ) {
    var AppRoutes = Backbone.Router.extend({
        routes: {
            "": "loadMain",
            "product/:id": "loadProduct",
            "cart": "loadCart"
        },

        loadMain: function(){
          console.log("loading main");
        },

        loadProduct: function(id){
          console.log("loading product" + id);
          var productPageView = new ProductPageView();
        },

        loadCart: function(){
          console.log("loading cart");
        }
    });
    
    return AppRoutes;
});
