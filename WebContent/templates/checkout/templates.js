(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['review-cart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <div class=\"review-cart-items\" >\n        <div class=\"row\" >\n            <div class=\"span9\">\n                <img class=\"cart-item-img\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n                <span class=\"cart-item-label\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </div>\n            <div class=\"span2\">\n                <div>";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </div>\n            <div class=\"span2\">\n                <div class=\"review-line-item-price cart-item-price\" >$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "number-format", depth0.price, options)))
    + "</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"separator\"></div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"review-cart\">\n    <br style=\"clear:both\" />\n    <header class=\"review-cart-header\">\n        <div class=\"row\" >\n            <div class=\"span9\">\n                <header>Your Order</header>\n            </div>\n            <div class=\"span2\">\n                <header>Qty</header>\n            </div>\n            <div class=\"span2\">\n                <header>Price</header>\n            </div>\n        </div>\n    </header>\n    <div class=\"separator\"></div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.checkoutCart, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
templates['review-fulfilment-details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <div class=\"opt\" cardid=\"";
  if (stack1 = helpers.lastFourDigits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastFourDigits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" selected=\"";
  if (stack1 = helpers.selected) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selected; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.cardType) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cardType; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ending in ";
  if (stack1 = helpers.lastFourDigits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastFourDigits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n                            ";
  return buffer;
  }

  buffer += "<div class=\"review-fulfilment-details\">\n    <div class=\"row\" >\n        <div class=\"span4\">\n            <div class=\"payment-details\">\n                <header class=\"billing-header-text\" >Payment Details</header>\n                <div class=\"filter\">\n                    <div class=\"selected-credit-card\">\n                        <span class=\"text\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.cardType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ending in "
    + escapeExpression(((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.lastFourDigits)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                        <b class=\"selected-credit-card-arrow\"></b>\n                        <div class=\"options\">\n                            ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.wallet)),stack1 == null || stack1 === false ? stack1 : stack1.cards), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </div>\n                    </div>\n                </div>\n\n                <label class=\"address-label\">\n                    Billing Address\n                </label>\n                <div class=\"billing-address-text\">\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.streetNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.streetName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.zipCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.selected),stack1 == null || stack1 === false ? stack1 : stack1.billingAddress)),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n            </div>\n        </div>\n        <div class=\"vertical-separator fulfilment\"></div>\n        <div class=\"span4\">\n            <div class=\"shipping\">\n                <header class=\"shipping-header-text\">Shipping <span>(Multiple Addresses?)</span></header>\n                <div class=\"shipping-method\">\n                    Standard\n                </div>\n                <label class=\"address-label\">\n                    Shipping Address\n                </label>\n                <div class=\"billing-address-text\">\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.streetNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.streetName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.zipCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <br>\n                    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.addressList)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.country)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n            </div>\n        </div>\n        <div class=\"vertical-separator fulfilment\"></div>\n        <div class=\"span3\">\n            <div class=\"delivery-date\">\n                <header class=\"delivery-date-text\">Delivery Date</header>\n                <div class=\"date\">April 12, 2013 </div>\n                <div class=\"delivery-date-notice\"></div>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['review-header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"gh-head clearfix\">\n    <div class=\"gh-logo\"><span class=\"text\">Walmart</span><img class=\"spark\" src=\"../../img/spark.png\"/></div>\n    <div class=\"gh-srch\"></div>\n    <div class=\"gh-links\">\n        <div class=\"gh-link bd\"><span class=\"create\">Create</span><br/><span class=\"text\">a new wish list</span></div>\n        <div class=\"gh-link bd\"><span class=\"signin\">Welcome</span><br/><span class=\"text\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.customer),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></div>\n        <div class=\"gh-link\"><span class=\"cart\">";
  if (stack2 = helpers.cartSize) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.cartSize; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " Items</span><br/><span class=\"text\">a new wish list</span></div>\n    </div>\n</header>";
  return buffer;
  });
templates['review-pricing'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"review-pricing\">\n    <div class=\"row\" >\n        <div class=\"span9\">\n            <span class=\"review-pricing-text\">\n                Review your order:\n            </span>\n            <span class=\"review-pricing-text bold\">\n                ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items\n            </span>\n            <div class=\"vertical-separator\"></div>\n            <span class=\"review-pricing-text bold\">\n                $";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.totals, options) : helperMissing.call(depth0, "number-format", depth0.totals, options)))
    + " Total\n            </span>\n        </div>\n        <div class=\"span4\">\n            <div class=\"confirm-order-button\">\n                <a class=\"\" href=\"#\">Confirm Order</a>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['review-subtotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "\n<div id=\"review-subtotals\" class=\"row\">\n    <div class=\"span2 \">\n        <span class=\"detail-labels detail-labels-subtotal\">Subtotals</span>\n    </div>\n    <div class=\"span7\">\n        <section class=\"calc-block\">\n            <span class=\"detail-labels\">Items (";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span><br>\n            <span class=\"review-line-item-price\">$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.subtotal, options) : helperMissing.call(depth0, "number-format", depth0.subtotal, options)))
    + "</span>\n            <span class=\"plus\">+</span>\n        </section>\n        <section class=\"calc-block\">\n            <span class=\"detail-labels\">Shipping & Handling</span><br>\n            <span class=\"review-line-item-price shipping-handling\">$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.shippingCosts, options) : helperMissing.call(depth0, "number-format", depth0.shippingCosts, options)))
    + "</span>\n            <span class=\"plus\">+</span>\n        </section>\n        <section class=\"calc-block\">\n            <span class=\"detail-labels\">Taxes</span><br>\n            <span class=\"review-line-item-price\">$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.taxes, options) : helperMissing.call(depth0, "number-format", depth0.taxes, options)))
    + "</span>\n        </section>\n    </div>\n    <div class=\"vertical-separator subtotal\"></div>\n    <div class=\"span2\">\n        <span class=\"detail-labels\">Total</span><br>\n        <span class=\"review-line-item-price\">$";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['number-format']),stack1 ? stack1.call(depth0, depth0.totals, options) : helperMissing.call(depth0, "number-format", depth0.totals, options)))
    + "</span>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['test-view'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div>\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    ";
  return buffer;
  }

  buffer += "<div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.all, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
})();