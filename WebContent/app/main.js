require.config({
  paths: {
    jquery: "../lib/jquery",
    jqueryUI: "../lib/jquery-ui.min",
    underscore: "../lib/underscore",
    backbone: "../lib/backbone",
    text: "../lib/text",
    hbs: "../lib/hbs",
    //Templates
    "tmpl": "views/templates",
  },
  wrapShim: true,
  map: {
    "*": {
      // Direct imports can only use runtime.
       handlebars: "hbs/handlebars",
       Handlebars: "hbs/handlebars"
     }
  },
  
  shim: {
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    },
    handlebars: {
      exports: "Handlebars"
    },
    jqueryUI: {
      export:"$UI" ,
      deps: ["jquery"]
    }
  }

});
