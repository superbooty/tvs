define([
  "jquery",
  "underscore",
  "backbone",
  "../app-events",
  "hbs!tmpl/ProductPageView"
], function (
  $,
  _,
  Backbone,
  AppEvents,
  productPageViewTemplate
  ) {
	
  var ProductPageView = Backbone.View.extend({

    el: ".js-product-page",
    template: productPageViewTemplate,

    initialize: function (options) {
      this.render();
    },

    events: {
    },

    render: function () {
      this.$el.html(this.template({"data": this.data}));
      return this;
    }

  });

  return ProductPageView;
});
