define(["backbone", "models/review"], function (Backbone, Review) {

  var Reviews = Backbone.Collection.extend({
    model: Review,

    url: function () {
      return "/product-loader/api/reviews";
    },
    
    filterByRating: function (minSize) {
      filtered = this.filter(function (item) {
        return item.get("rating") == minSize;
      });
      this.reset(filtered);
    },

  });

  return Reviews;
});
