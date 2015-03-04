define([
  "jquery",
  "underscore",
  "backbone",
  "../app-events",
  "hbs!tmpl/ReviewsHeader"
], function (
  $,
  _,
  Backbone,
  AppEvents,
  headerTemplate
  ) {
    
  var ReviewsHeader = Backbone.View.extend({
    el: ".js-review-header",
    template: headerTemplate,

    initialize: function (options) {
      this.render();
    },
    
    events: {
      "click .js-clear-filters": "clearFilters",
      "click .type-button .opt" : "select"
    },
    
    render: function () {
      this.$el.html(this.template({}));
      return this;
    },
    
    filterByRatings: function () {
      console.log("Filtering on Ratings");
      AppEvents.EventBus.trigger("filters:ratings", {"limit": 3});
    },
    
    select : function(event) {
      //var context = this.model.attributes;
      var rating = this.$(event.currentTarget).data("rating");
      AppEvents.EventBus.trigger("filters:ratings", {"limit": rating});
    },
    
    clearFilters: function () {
      console.log("Clearing Filters");
      AppEvents.EventBus.trigger("filters:clear");
    }
  });
  
  return ReviewsHeader;
});