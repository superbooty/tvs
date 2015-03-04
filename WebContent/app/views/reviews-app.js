define([
  "jquery",
  "handlebars",
  "views/reviews-main-view",
  "helpers/helper"
], function (
  $,
  Handlebars,
  ReviewsMainView
  ) {
    $(function () {
      new ReviewsMainView({});
    });
});