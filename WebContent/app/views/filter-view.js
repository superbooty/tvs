define([
  "jquery",
  "underscore",
  "backbone",
  "views/product-view",
  "collections/products",
  "../app-events",
  "hbs!tmpl/ShelfFilters",
  "jqueryUI"
], function (
  $,
  _,
  Backbone,
  ProductView,
  Products,
  AppEvents,
  shelfFiltersTemplate
  ) {

  var COLLECTION_META ={
    "maxsize": 73,
    "minsize": 19,
    "brandName": [
       "Vizio", "Sanyo", "Sceptre",
      "Hannspree", "RCA", "Element",
      "Toshiba", "Westinghouse", "Samsung",
      "Philips", "Hiteker", "Sharp",
      "Emerson", "Proscan", "JVC", "LG", "Mitsubishi"
    ]
  };

  var FiltersView = Backbone.View.extend({

    el: ".js-shelf-filter",
    template: shelfFiltersTemplate,
    
    initialize: function (options) {
      console.log("init ProductFinderFilterView");
      this.collection = options.collection;
      this.rangeValues = [ COLLECTION_META.minsize, COLLECTION_META.maxsize ];
      this.listenTo(AppEvents.EventBus, "filters:reset", this.render);
      this.render();
    },
  
    rangeValues:[0, 100],
  
    events:{
      'click .sort-button': 'click',
      'click .brand-button': 'click',
      'click .type-button': 'click',
      'click .brand-button .opt' : 'select',
      'click .type-button .opt' : 'select',
      'click .sort-button .opt' : 'sort',
      'mouseleave .options' : 'mouseleave',
      'mouseleave .sort-button' : 'mouseleave',
      'mouseleave .brand-button' : 'mouseleave',
      'mouseleave .type-button' : 'mouseleave'
    },
  
    click : function(event) {
      $(event.currentTarget).find('.options').css({visibility:'visible'});
    },
  
    select : function(event) {
      //var context = this.model.attributes;
      var filterOnValue = $(event.target).text();
      $(event.currentTarget).parent().parent().find('.text').text($(event.target).text());
      $(event.currentTarget).parent().find('.options').css({visibility:'hidden'});
      event.stopPropagation();
      this.collection.filterOnName(filterOnValue);
    },
  
    sort : function(event) {
      console.log($(event.target).text());
      this.collection.sortBy($(event.target).text(), true);
    },
  
    mouseleave : function(event) {
      this.$el.find('.options').css({visibility:'hidden'});
      //event.stopPropagation();
    },
  
    render: function () {
      //var data = this.model.toJSON();
      //var items = data[0].item;
      this.$el.html(this.template(COLLECTION_META.brandName));
      console.log(this.$el);
      var self = this;
  
      this.$("#range-value2").css({left:"-27px", top:"-55px"}).show();
      this.$("#range-value1").css({left:"-27px", top:"-55px"}).show();
  
      $("#slider-range").slider({
        range:true,
        min:1,
        max:100,
        values:[ self.rangeValues[0], self.rangeValues[1] ],
        slide:function (event, ui) {
          self.$("#range-value1 .text").html(ui.values[0]+"\"");
          self.$("#range-value2 .text").html(ui.values[1]+"\"");
        },
  
        stop: function(event, ui){
          var range = {"low":ui.values[0], "high":ui.values[1]};
          self.collection.filterOnRange(range);
          AppEvents.EventBus.trigger("shelf:filter");
        }
      });
  
      this.$("#slider-range").find('span:last').append(this.$("#range-value2")).css({outline:"0 none"});
      this.$("#slider-range").find('span:first').append(this.$("#range-value1")).css({outline:"0 none"});

      return this;
    }

  });

  return FiltersView;
});
