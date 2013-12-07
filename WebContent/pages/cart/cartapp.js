
var cartPage = function () {
	cartItems.fetch();
    var cartData = null;
    var storage = null;

    if (typeof(sessionStorage) == 'undefined' ) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
        storage = window['sessionStorage'];
        cartData = storage.getItem('jsonCart');
    }
    
    if(cartData != null){
        var parsedData = JSON.parse(cartData);
        myCart.setCartItems(parsedData.cartItems);
        myCart.setSavedItems(parsedData.savedItems);
    } 
    
    var CartItem = Backbone.View.extend({

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
        },

        render: function(){
        	console.log(this.model.toJSON());
            this.$el.html(this.options.template({item: this.model.toJSON()}));
            console.log(this.$el);
            return this;
        }

    });

    var CartItemView = Backbone.View.extend({

        availabilityModel: null,

        initialize:function () {
        	console.log("CartItems: "+JSON.stringify(cartItems));
            //this.listenTo(this.model, 'reset', this.render);
        },

        render:function(props){
        	
            this.$el.html(this.options.template({"forPurchaseCount":cartItems.getCartItemCount()}));
            $('.cart-item-container').html(this.el);
            console.log("re-rendering");

            $('#collapseBox1_1').addClass('in');
            $('#collapseBox1_2').addClass('in');
            $('.accordionMod .accordion-toggle').find('.icon').addClass('iconActive');
            var that = this;
            this.model.each(function( item ) {
            	console.log(JSON.stringify(item));
                that.renderItem( item );
            });
        },
        
        renderItem: function( item ) {
            var cartItem = new CartItem({
                template: Handlebars.templates['cart-item-details'],
                model: item
            });
            $('.cart-item-details-container').append( cartItem.render().el );
        }

    });

    var CartHeader = Backbone.View.extend({
        initialize:function () {
            this.listenTo(this.model, 'change', this.render);
        },

        events:{
            'click .sort-button': 'click',
            'click .opt' : 'select',
            'mouseleave .options' : 'mouseleave',
            'mouseleave .sort-button' : 'mouseleave',
            'click .sort-button .opt' : 'sort'
        },

        click : function(event) {
            this.$el.find('.options').css({visibility:'visible'});
        },

        select : function(event) {
            var context = this.model.attributes;
            this.$el.find('.sort-button .text').text($(event.target).text());
            this.$el.find('.options').css({visibility:'hidden'});
            event.stopPropagation();
        },

        mouseleave : function(event) {
            this.$el.find('.options').css({visibility:'hidden'});
            event.stopPropagation();
        },

        sort : function(event) {
            console.log($(event.target).text());
        },

        render:function(){
            this.$el.html(this.options.template({"cartSize":cartItems.length}) );
            $('.cart-header-container').html(this.el);
            this.delegateEvents(this.events);
        }
    });



    var CartSubtotals = Backbone.View.extend({
        initialize:function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render:function(){
            this.$el.html(this.options.template({"subtotals": cartItems.getCartTotals()}) );
            $('.cart-subtotal-container').html(this.el);
        }
    });




    var CartPageView = Backbone.View.extend({
    	
        render: function(){
        	
            var cartItemView = new CartItemView({
                template:Handlebars.templates['cart-item'],
                model: cartItems
            });
            cartItemView.render();

            var cartHeader = new CartHeader({
                template:Handlebars.templates['cart-header'],
                model: cartItems
            });
            cartHeader.render();

            var cartSubtotals = new CartSubtotals({
            	template:Handlebars.templates['cart-subtotal'],
            	model: cartItems
            });
            cartSubtotals.render();

            var cart = function () {
                var o = $('.cart').offset();
                $('.cart-page').css({ 'top': o.top + 60,
                    'left': o.left - (750 - 120),
                    'border-radius':'5px'
                });
                $('.cart-page').slideDown(1000);
            };
            cart();

            $('.selected-product').hide();

        }

    });
    var cartPageView = new CartPageView();
    cartPageView.render();


};

