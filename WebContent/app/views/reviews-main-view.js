define([
  "jquery",
  "underscore",
  "backbone",
  "views/reviews-header-view",
  "views/reviews-container-view",
  "../app-events",
  "hbs!tmpl/ReviewsMainView"
], function (
  $,
  _,
  Backbone,
  ReviewsHeader,
  ReviewsContainer,
  AppEvents,
  reviewsMainTemplate
  ) {
	
  var MainAppView = Backbone.View.extend({

    el: ".js-reviews-main",
    template: reviewsMainTemplate,

    initialize: function (options) {
      this.render();
    },

    events: {
    },

    render: function () {
      this.$el.html(this.template({}));
      console.log(this.$el);
      this.addSubViews();
      return this;
    },

    addSubViews: function () {
      var self = this;
      var reviewsHeader = new ReviewsHeader({});
      this.$el.append(reviewsHeader.el);
      
      var reviewsContainer = new ReviewsContainer({});
      this.$el.append(reviewsContainer.el);
    },
    
    loadReviews: function () {
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

    
  });

  return MainAppView;
});
