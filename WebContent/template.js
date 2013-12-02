(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<section class=\"about\">\n    <header class=\"about-header\">\n        About\n    </header>\n    <div class=\"clear\"></div>\n    <div class=\"about-data\">\n        ";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</section>";
  return buffer;
  });
templates['carousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"400\" height=\"325\" /></li>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li><a rel=\""
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"pagenum\" href=\"#\"></a></li>\n            ";
  return buffer;
  }

  buffer += "<script type=\"text/javascript\">\n    $(document).ready(function(){\n        $('#slider-code').tinycarousel({pager:true, controls:true});\n    });\n</script>\n<div id=\"slider-code\">\n    <a class=\"buttons prev\" href=\"#\">left</a>\n    <div class=\"viewport\">\n        <ul class=\"overview\">\n            ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.images), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </ul>\n    </div>\n    <a class=\"buttons next\" href=\"#\">right</a>\n    <ul class=\"pager\">\n        <ul class=\"poverview\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.images, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </ul>\n    </ul>\n</div>";
  return buffer;
  });
templates['cart-options'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"filter\">\n    <div class=\"qty-button\">\n        <span class=\"text\">Qty</span><b class=\"qty-button-arrow\"></b>\n        <div class=\"options\"><a class=\"opt\">1</a><a class=\"opt\">2</a><a class=\"opt\">3</a></div>\n    </div>\n</div>\n<input class=\"add-to-cart\" type=\"button\" value=\"Add to Cart\">";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n<section class=\"product-header\">\n    <section class=\"product-name\">\n        <p>Samsung 46\" LCD</p>\n        <img src=\"/img/close-panel.png\" alt=\"close\" />\n        <div class=\"clear\"></div>\n    </section>\n    <section class=\"product-rating-container\">\n        <div class=\"product-rating\" >\n            <span class=\"gray\">\n                <span class=\"gold\">\n                </span>\n            </span>\n        </div>\n        <span class=\"product-review-links\" id=\"review-links\">&nbsp;&nbsp;109 Reviews  |  <a href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n        <div class=\"clear\"></div>\n    </section>\n</section>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['product-details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <tr>\n                    <td class=\"LightRowHead\">\n                        ";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                    </td>\n                    <td class=\"LightRow\">\n                        ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                    </td>\n                </tr>\n                ";
  return buffer;
  }

  buffer += "<script src=\"../js/tab.js\"></script>\n<div class=\"product-details\">\n\n    <div class=\"wrapper\">\n        <h2>\n            Product Details\n        </h2>\n        <div id=\"v-nav\" >\n            <ul>\n                <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n            </ul>\n\n            <div class=\"tab-content\" style=\"display:block\">\n                ";
  stack2 = ((stack1 = ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n\n            <div class=\"tab-content\">\n                <table class=\"spec-table\">\n                    <colgroup><col width=\"40%\">\n                        <col width=\"60%\">\n                    </colgroup><tbody>\n                ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.details),stack1 == null || stack1 === false ? stack1 : stack1.specifications), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </tbody></table>\n            </div>\n\n            <div class=\"tab-content\">\n                <div class=\"ItemSectionContent\">\n                    <div class=\"WarrantyService BodyXL\">\n                        <div>\n                            <strong>Product warranty:</strong>\n                            <a onclick=\"s_objectID=&quot;javascript:void(0);_15&quot;;return this.s_oc?this.s_oc(e):true\" href=\"javascript:void(0);\">See details</a>\n                        </div>\n                        <!-- Start: if service plans available -->\n                        <!-- End: if service plans available -->\n                    </div>\n                    <!--start of modify-->\n                    <div class=\"WarrantyServiceMain BodyL\">\n                        <div class=\"multiCol greybar-box\">\n                            <div class=\"greybar-noheader\">\n                                <div class=\"tl mainSpriteBKG\">\n                                    <div class=\"tr mainSpriteBKG\">\n                                        <div class=\"tc mainSpriteBKG\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"greybar-body clearfix\">\n                                <img width=\"110px\" height=\"105px\" border=\"0\" src=\"http://i.walmartimages.com/i/p/00/02/95/15/40/0002951540080_100X100.jpg\" class=\"picleft\" alt=\"Protect it\">\n                                <div class=\"Summary\"><strong>Walmart Product Care Plans</strong>\n                                    <p>A limited product warranty is included free for most items. With an optional Walmart Care Plan you can extend coverage up to 3 additional years. Walmart Care Plan Extended Warranties cover 100% of the cost for repair or replacement, including shipping charges for the exchange. <a onclick=\"s_objectID=&quot;javascript:void(0);_16&quot;;return this.s_oc?this.s_oc(e):true\" href=\"javascript:void(0);\">See Details</a></p>\n                                    <p class=\"mt20\">We'll show you extended warranty options and pricing at checkout if applicable.</p>\n                                </div>\n                            </div>\n                            <div class=\"greybar-footer\">\n                                <div class=\"bl mainSpriteBKG\"><div class=\"br mainSpriteBKG\"><div class=\"bc\"></div></div></div>\n                            </div>\n                        </div>\n                        <span>If you made your purchase in a Walmart store and would like to purchase a warranty <a title=\"Warranty &amp; Installation Plans\" href=\"http://see.walmart.com/walmart/protection-plans/\" onclick=\"s_objectID=&quot;http://see.walmart.com/walmart/protection-plans/_1&quot;;return this.s_oc?this.s_oc(e):true\">Click Here</a></span>\n                    </div>\n                    <!--start of modify-->\n                </div>\n            </div>\n\n            <div class=\"tab-content\">\n                <div class=\"BodyXL ItemSectionContent PaymentOptions\">\n                    <!-- Start: if Bill Me Later applies -->\n                    <h4 style=\"font-family:Verdana,sans-serif;\" class=\"BodyXLBold\">Enjoy Great Financing!</h4>\n                    <img width=\"91\" height=\"51\" src=\"http://i2.walmartimages.com/i/spacer.gif\" class=\"CreditCardImg mainSpriteICN sprite-a111_WMCC_91x51\" alt=\"\">\n                    <div class=\"CreditOffer\">Make the most of your shopping experience with the Walmart Discover<sup>&reg;</sup> or Walmart Credit Card.</div>\n                    <!-- Commented for the new instant credit card offers :19/Dec Svenkataraman-->\n                    <p>Open a Walmart Credit Card, Spend $100 Today and Get $20 Back*</p>\n                    <p>*Offer subject to credit approval</p>\n                    <p><a onclick=\"s_objectID=&quot;http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=447772_1&quot;;return this.s_oc?this.s_oc(e):true\" href=\"/cservice/contextual_help_popup.gsp?modId=447772\">Learn More</a> or <a href=\"/instantcredit\" onclick=\"s_objectID=&quot;http://www.walmart.com/instantcredit_1&quot;;return this.s_oc?this.s_oc(e):true\">Apply Now</a></p>\n                    <div class=\"BodyXLBold NoPayOffer\">No Payments + No Interest <span class=\"BodyXL\">if Paid in Full in 6 Months!</span></div>\n                    <img width=\"100\" height=\"25\" src=\"http://i2.walmartimages.com/i/spacer.gif\" class=\"mainSpriteICN sprite-a112_BMLR\" alt=\"\">\n                    <div class=\"BuyNow\">Enjoy no payments for 6 months. You'll have 6 months with no payments, and no interest if paid in full within 6 months on orders over $250. Otherwise, interest will be charged from the original date of purchase. Bill Me Later is the quick, easy, secure way to buy online without using your credit card. Simply select Bill Me Later at checkout. Subject to credit approval.</div>\n                    <p class=\"clear\"><!-- --></p>\n                    <p><a onclick=\"s_objectID=&quot;https://www.securecheckout.billmelater.com/paycapture-content/fetch?hash=28A27SUA&amp;content=/bmlweb_1&quot;;return this.s_oc?this.s_oc(e):true\" href=\"https://www.securecheckout.billmelater.com/paycapture-content/fetch?hash=28A27SUA&amp;content=/bmlweb/np90drollingiw.html\">See Terms</a></p>\n                </div>\n            </div>\n            <div class=\"tab-content\">\n\n            </div>\n\n        </div>\n    </div>\n\n</div>";
  return buffer;
  });
templates['user'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <section>name: ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</section>\n        <section><a href=\"#\">";
  if (stack1 = helpers.org) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.org; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></section>\n        <section>role: ";
  if (stack1 = helpers.role) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.role; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</section>\n        ";
  return buffer;
  }

  buffer += "<div>\n\n    <section>\n        This is how we roll...\n        ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </section>\n\n</div>";
  return buffer;
  });
})();