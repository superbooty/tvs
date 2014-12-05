define(["backbone", "models/product"], function (Backbone, Product) {

  var Products = Backbone.Collection.extend({
    model: Product,

    url: function () {
      return "/tvs/api/products";
    },
    
    original: [],
    
    initialize: function (models) {
      this.original = models;
    },

    sortKey: "name",
    reverse: false,

    parse: function (response) {
      this.original = _.clone(response);
      return response;
    },

    filterBySize: function (minSize) {
      filtered = this.filter(function (item) {
        return item.get("size") >= minSize;
      });
      this.reset(filtered);
    },

    filterOnRange: function(range) {
      filtered = this.filter(function (item) {
        return item.get("size") >= range.low
          && item.get("size") <= range.high;
      });
      this.reset(filtered);
    },

    filterOnName: function(value){
      filtered = this.filter(function (item) {
        console.log(item);
        return item.get("name").match(value);
      });
      return this.reset(filtered);
    },
    

    comparator: function(a, b) {
      // Assuming that the sort_key values can be compared with '>' and '<',
      // modifying this to account for extra processing on the sort_key model
      // attributes is fairly straight forward.
      a = a.get(this.sortKey);
      b = b.get(this.sortKey);
      if(this.reverse){
        return a < b ?  1
          : a > b ? -1
          :        0;
      }else{
        return a > b ?  1
          : a < b ? -1
          : 0;
      }
    },

    sortBy: function(sortKey, reverse){
      this.sortKey = sortKey.toLowerCase();
      this.reverse = false;
      this.sort();
    }

  });

  return Products;
});
