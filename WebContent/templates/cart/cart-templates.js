(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart-header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section class=\"cart-header\">\n    <section class=\"cart-item-count\">\n        <p class=\"cart-item-count\">";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items in your cart</p>\n        <div class=\"filter\">\n            <div class=\"sort-button\">\n                <span class=\"text\">Sort</span><b class=\"sort-button-arrow\"></b>\n                <div class=\"options\">\n                    <div class=\"opt\">Name</div>\n                    <div class=\"opt\">Price</div>\n                </div>\n            </div>\n        </div>\n        <a href=\"/\"><img src=\"../../img/close-panel.png\" alt=\"close\" /></a>\n        <div class=\"clear\"></div>\n    </section>\n\n    <div class=\"separator\"></div>\n</section>";
  return buffer;
  });
templates['cart-item-availability'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"cart-item-availability\">\n    Hi ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>";
  return buffer;
  });
templates['cart-item-details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"cart-item-data\">\n    <div class=\"row\">\n        <div class=\"span2\">\n            <a href=\"#/product/"
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></a>\n        </div>\n        <div class=\"span3\">\n            <section class=\"cart-item-options-container\">\n                <header class=\"cart-item-label\">";
  stack2 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</header>\n                <div class=\"cart-item-option\">\n                    <a href=\"javascript:void(0)\" itemtosave=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"move-to-cart-button\">Move to Cart</a>\n                </div>\n                <div class=\"cart-item-option\">\n                    <a href=\"javascript:void(0)\" itemtoremove=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"remove-button\">Remove</a>\n                </div>\n            </section>\n        </div>\n        <div class=\"span1\">\n            <div class=\"cart-item-qty-container\">\n                <label class=\"cart-item-label text-gray\" title=\"Qty\">Quantity</label>\n                <span class=\"h1\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.qty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </div>\n        </div>\n        <div class=\"span2\">\n            <div class=\"cart-item-price-container\">\n                <label class=\"cart-itm-label text-gray list-price\" title=\"listPrice\">List Price $";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.price), options) : helperMissing.call(depth0, "number-format", ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.price), options)))
    + "</label>\n                <span class=\"h1 item-price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.dispPrice)),stack1 == null || stack1 === false ? stack1 : stack1.dollars)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span class=\"dollar\">."
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.dispPrice)),stack1 == null || stack1 === false ? stack1 : stack1.cents)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></span>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['cart-item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<script src=\"js/cart/cart-accordion.js\"></script>\n<div class=\"cart-item\">\n    <section class=\"accordionMod\">\n        <div>\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <div class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion1\"\n                         data-target=\"#collapseBox1_1\"><span class=\"icon\"></span>\n\n                        <p class=\"cart-item-count-accordion\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " For Purchase</p>\n                    </div>\n                </div>\n                <div class=\"separator\"></div>\n                <div class=\"accordion-body collapse\" id=\"collapseBox1_1\" >\n                    <section class=\"accordion-inner\">\n                        <section class=\"cart-item-details-container\"  >\n\n                        </section>\n                    </section>\n                </div>\n                <div class=\"separator\"></div>\n            </div>\n        </div>\n    </section>\n</div>\n\n\n";
  return buffer;
  });
templates['cart-subtotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"cart-subtotals\">\n    <div class=\"row\">\n        <div class=\"span2\">\n        </div>\n        <div class=\"span3\">\n            <section class=\"cart-pricing\">\n                <span >$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.subtotals, options) : helperMissing.call(depth0, "number-format", depth0.subtotals, options)))
    + "</span>\n            </section>\n        </div>\n        <div class=\"span2\">\n            <div class=\"cart-checkout-button\">\n                <a href=\"#/pages/checkout/review.html\" class=\"checkout-button\">Checkout</a>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
})();