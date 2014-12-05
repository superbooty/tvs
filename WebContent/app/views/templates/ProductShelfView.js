define(['handlebars'], function(Handlebars) {
return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"product-finder-filter-results\">\n    <div class=\"product-finder-filter-msg\">\n        <span class=\"item-counter item-counter-bold\">";
  if (stack1 = helpers.matches) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.matches; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " matches</span><span class=\"item-counter\"> for televisions fitting that criteria</span>\n    </div>\n    <input type=\"button\" value=\"Clear Filters \" class=\"product-finder-filter-clear-btn\">\n</div>\n<div class=\"js-product-list shelf-view-container\"></div>\n";
  return buffer;
  })
});