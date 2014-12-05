define(['handlebars'], function(Handlebars) {
return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"shelf-item-img\">\n    <a href=\"#/product/"
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img class=\"lazy\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></a>\n</div>\n<div class=\"shelf-item-name\">\n    "
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</div>\n<div class=\"shelf-item-desc\">\n    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.desc || depth0.desc),stack1 ? stack1.call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.description), options) : helperMissing.call(depth0, "desc", ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.description), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n<div class=\"shelf-item-price\">\n    $"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.dispPrice)),stack1 == null || stack1 === false ? stack1 : stack1.dollars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span class=\"dollar\">."
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.dispPrice)),stack1 == null || stack1 === false ? stack1 : stack1.cents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n</div>\n<div class=\"product-rating shelf-item-rating \" >\n    <span class=\"gray\">\n        <span class=\"gold\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.crr || depth0.crr),stack1 ? stack1.call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.rating), options) : helperMissing.call(depth0, "crr", ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.rating), options)))
    + "\">\n        </span>\n    </span>\n</div>\n";
  return buffer;
  })
});