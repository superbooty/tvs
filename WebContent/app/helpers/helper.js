/**
 * Exports and registers the Handlebars helpers:
 */

define([
  "handlebars"
], function (Handlebars) {

/**
 * If Greater Than
 * if_gt this compare=that
 */
Handlebars.registerHelper('if_gt', function(context, options) {
    if (context > options.hash.compare)
        return options.fn(this);
    return options.inverse(this);
});

/**
 * If Less Than
 * if_lt this compare=that
 */
Handlebars.registerHelper('if_lt', function(context, options) {
    if (context < options.hash.compare)
        return options.fn(this);
    return options.inverse(this);
});

Handlebars.registerHelper('number-format', function(number, options){
    return number.toFixed(2);
});

Handlebars.registerHelper('availability', function(dynamicItem, options){
    if(dynamicItem.inStock){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

Handlebars.registerHelper('everyNth', function (context, every, options) {
    var fn = options.fn, inverse = options.inverse;;
    return (options.data.index ) % every == 0 ? fn(context) : inverse(this);
});

Handlebars.registerHelper('ratingsHelper', function (ratings) {
    var val = Math.round(ratings);
    return (5 - val) * 19;
});

Handlebars.registerHelper('desc', function (desc) {
    return desc.split(/<li>/i).slice(1).join(', ');
});

Handlebars.registerHelper('crr', function(crrVal, options) {
    return (crrVal * 20)+"px";
});

});
