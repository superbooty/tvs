define([
  "jquery",
  "views/shelf-view",
  "views/filter-view",
  "handlebars",
  "product/data",
  "helpers/helper"
], function (
  $,
  ShelfView,
  FiltersView,
  Handlebars,
  productData
  ) {
    $(function () {
      console.log(productData);
      new ShelfView(productData);
      console.log(Handlebars);
    });
});