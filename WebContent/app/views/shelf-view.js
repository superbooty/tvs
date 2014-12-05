define([
  "jquery",
  "underscore",
  "backbone",
  "views/product-view",
  "views/filter-view",
  "collections/products",
  "../app-events",
  "hbs!tmpl/ProductShelfView"
], function (
  $,
  _,
  Backbone,
  ProductView,
  FiltersView,
  Products,
  AppEvents,
  shelfViewTemplate
  ) {
	
  var MainAppView = Backbone.View.extend({

    el: ".js-shelf-page",
    template: shelfViewTemplate,

    initialize: function (options) {
      this.collection = new Products(options.data);
      // this.loadProducts();
      new FiltersView({"collection": this.collection});
      this.listenTo(AppEvents.EventBus, "shelf:filter", this.render);
      this.render();
    },

    events: {
      "click .js-clear-filter": "clearFilters"
    },

    render: function () {
      this.$el.html(this.template({"data": this.data}));
      this.addProductViews();
      return this;
    },

    addProductViews: function () {
      var self = this;
      this.collection.each(function (product, index) {
        var productView = new ProductView({model: product});
        self.$el.find(".js-product-list").append(productView.el);
      });
      
    },
    
    loadProducts: function (id) {
      var self = this;
      this.collection.fetch({
        success: function () {
          self.addProductViews();
        },
        error: function () {
          console.log("errors found");
        }
      });
    },
    
    clearFilters: function () {
      this.collection.reset(this.collection.original);
      AppEvents.EventBus.trigger("filters:reset");
      this.render();
    }
    
  });

  return MainAppView;
});
