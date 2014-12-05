define([
  "jquery",
  "views/shelf-view",
  "views/filter-view",
  "handlebars",
  "../app-routes",
  "product/data",
  "helpers/helper"
], function (
  $,
  ShelfView,
  FiltersView,
  Handlebars,
  Routes,
  productData
  ) {
    $(function () {
      console.log(productData);
      new ShelfView(productData);
      console.log(Handlebars);
      var router = new Routes();
      Backbone.history.start();
    });
});