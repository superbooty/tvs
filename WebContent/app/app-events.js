// global event bus for One Hour Guarantee data exchage
define(["backbone", "underscore"], function (Backbone, _) {

  var AppEvents = _.extend({}, Backbone.Events);

  return {
    EventBus: AppEvents
  };
});
