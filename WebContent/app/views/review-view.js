define([
  "jquery",
  "underscore",
  "backbone",
  "../app-events",
  "hbs!tmpl/Review"
], function (
  $,
  _,
  Backbone,
  AppEvents,
  reviewTemplate
  ) {
    
  var Review = Backbone.View.extend({
    tagName: "li",
    template: reviewTemplate,

    initialize: function (options) {
      // this.model = options.model;
      this.render(options);
    },
    

    render: function (options) {
      console.log(options);
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },


  });
  
  return Review;
});