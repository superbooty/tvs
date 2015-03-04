define([
  "jquery",
  "underscore",
  "backbone",
  "collections/reviews",
  "views/review-view",
  "../app-events",
  "hbs!tmpl/ReviewsContainer"
], function (
  $,
  _,
  Backbone,
  Reviews,
  Review,
  AppEvents,
  containerTemplate
  ) {
    
  var ReviewsContainer = Backbone.View.extend({
    el: ".js-reviews-container",
    template: containerTemplate,

    initialize: function (options) {
      this.collection = new Reviews();
      this.listenTo(AppEvents.EventBus, "filters:ratings", this.showFilterdReviews);
      this.listenTo(AppEvents.EventBus, "filters:clear", this.clearFilters);
      //this.render();
      this.fetchReviewsHtml(0);
    },
    

    render: function () {
      this.$el.html(this.template());
      return this;
    },
    
    showReviews: function() {
      var $myReviews = this.$el.find("#js-review-list");
      $($myReviews[0]).empty();
      console.log(this.collection);
      this.collection.each(function (review, index) {
        var reviewView = new Review({model: review});
        $($myReviews[0]).append(reviewView.el);
      });	
    },
    
    showFilterdReviews: function(payload) {
      //console.log("Inside Reviews Container");
      //this.collection.filterByRating(payload.limit);
      // this.showReviews();
      this.fetchReviewsHtml(payload.limit);
    },
    
    clearFilters: function() {
      this.render();
    },
    
    fetchReviews: function () {
      var self = this;
      this.collection.fetch({
        success: function () {
          self.showReviews();
        },
        error: function () {
          console.log("We have an error");
        }
      });
    },
    
    fetchReviewsHtml: function (rating) {
      var self = this;
      $.get( "reviews-container/" + rating, function( data ) {
        self.$el.html(data);
      });
    }

  });
  
  return ReviewsContainer;
});