

var productPage = function(id){

    var productId = id;

    if (typeof(sessionStorage) == 'undefined' ) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    }

    // The model
    var ProductModel = Backbone.Model.extend({

        initialize: function() {
        	
        },

        id: function(){
            return this.itemId;
        },

        defaults:{
            waitImg: 'http://www.walmart.com/js/jquery/ui/theme/walmart/images/updating.gif'
        },

        // url:"http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids="+productId,
        url:"/product-loader/product/"+productId,

        productData: {},

        parse:function (data) {
            this.productData = data;
            return data;
        },

        getItemAttributes: function(){
            return this.productData.itemAttributes;
        },

        getItemPrice: function(){
            return this.productData.price;
        },
        
        getDispPrice: function() {
        	var splitPrice =  this.productData.price.toString().split(".");
        	if(!splitPrice[1]) {
        		splitPrice[1] = "00";
        	}
        	return {dollars: splitPrice[0], cents:splitPrice[1]};
        	
        },

        getProductName: function(){
            return this.productData.name;
        },

        getCRR: function(){
            return {rating:this.productData.rating, count:this.productData.crrcount};
        },

        getAlternateImages: function(){
            if(this.productData.alternateImageData == null){
                this.productData.alternateImageData = new Array();
                var mainImage = {"imageSrc":this.productData.productThumbnailURL,
                    "lgImageSrc": this.productData.productImageUrl,
                    "name":null};
                this.productData.alternateImageData.push(mainImage);
            }

            return this.productData.alternateImageData;
        },

        getProductMainData: function(){
            return this.productData.description;
        },

        getProductDetails: function(){
            var productDetails = {};
            productDetails.description = this.productData.description;
            productDetails.specifications = this.productData.itemAttributes;
            return productDetails;
        },

        getCartItem: function() {
            var ret = 
            {   qty:1,
                name:this.getProductName(),
                seller : 0,
                price : this.getItemPrice(),
                dispPrice: this.getDispPrice(),
                hasWarranty : false,
                linkedWarrantyId : 0,
                isPUT : false,
                pickupStore : 0,
                image: this.productData.image,
                id: this.productData.id,
                isSavedItem: false
            };
            return ret;
        }

    });

    var productModel = new ProductModel({id:21311919});
    productModel.fetch();

    // cart options (qty and add to cart buttons)
    var CartOptionsView = Backbone.View.extend({
        events:{
            'click .add-to-cart': 'click'
        },

        click: function(){

            var item = new cartModel(this.model.getCartItem());
            console.log(item.toJSON());
            if(typeof cartItems.get(item) == 'undefined') {
            	cartItems.add(item);
            	item.save();
            } else {
            	var existingItem = cartItems.get(item).clone();
            	console.log(existingItem.toJSON());
            	var updateQty = existingItem.get("qty") + 1;
            	existingItem.set({qty:updateQty});
            	//cartItems.remove(item);
            	cartItems.update(existingItem);
            	existingItem.save();
            	
            };
            cartItems.fetch();
            var mainHeaderView = new MainHeaderView({
                template:Handlebars.templates['main-header'],
                model: cartItems
            });
            mainHeaderView.render();

            var headerCartView = new HeaderCartView({
                template:Handlebars.templates['header-cart'],
                model:productModel
            });
            headerCartView.render();

        },

        render:function () {
            this.$el.html(this.options.template());
            $('.cart-options-container').html(this.el);
            return this;
            this.delegateEvents(this.events);
        }
    });


    // The header
    var HeaderView = Backbone.View.extend({
        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            //console.log(productModel.getAlternateImages());
            this.$el.html(this.options.template({crr:productModel.getCRR(), name:productModel.getProductName(), price:productModel.getItemPrice()}));
            $('.header').html(this.el);
            //return this;
        }
    });

    // The carousel
    var CarouselView = Backbone.View.extend({

        initialize:function () {
            this.listenTo(productModel, 'change', this.render);

        },

        render:function () {
            //console.log(productModel.getAlternateImages());
            this.$el.html(this.options.template({images:productModel.getAlternateImages()}));
            $('.carousel-container').html(this.el);
        }
    });

    // Main
    var ProductMainView = Backbone.View.extend({

        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            //console.log(productModel.getProductMainData());
            this.$el.html(this.options.template({about:productModel.getProductMainData()}));
            $('.about-container').html(this.el);
        }
    });

    var productMainView = new ProductMainView({
        template:Handlebars.templates['about']
    });


    // Product details
    var ProductDetails = Backbone.View.extend({

        initialize:function () {
            this.listenTo(productModel, 'change', this.render);
        },

        render:function () {
            //console.log(productModel.getProductDetails());
            this.$el.html(this.options.template({details:productModel.getProductDetails()}));
            $('.product-details-container').html(this.el);
            return this;
        }
    });

    // Buying Options
    var BuyingOptionsModel = Backbone.Model.extend({
        defaults: {
            listEntry1: {label:'Find This Product Locally', img:'img/find-icon.png'},
            listEntry2: {label:'Calculate Arrival Date', img:'img/arrival-icon.png'},
            listEntry3: {label:'Share With a Friend', img:'img/share-icon.png'}
        }
    });

    var buyingOptionsModel = new BuyingOptionsModel();

    var BuyingOptionsView = Backbone.View.extend({

        render:function () {
            //console.log(this.model);
            this.$el.html(this.options.template({listValues:this.model.attributes}));
            $('.buying-options-container').html(this.el);
            return this;
        }
    });

    var PeopleViewedItem = Backbone.Model.extend({

    });

    // People who viewed
    var PeopleViewedCollection = Backbone.Collection.extend({
        url: "json/products.json",

        model: PeopleViewedItem,

        parse: function(response) {
            return response;
        },

        bySizeAndHigher: function(minSize) {
            filtered = this.filter(function(item) {
                return item.get("size") >= minSize;
            });
            this.reset(filtered);
            return new PeopleViewedCollection(filtered);
        }
    });
    var peopleViewedCollection = new PeopleViewedCollection();

    var peopleViewedListView = Backbone.View.extend({

        initialize:function () {
            this.listenTo(this.model, 'reset', this.render);

        },

        events:{
            'click .see-more-button': 'click'
        },

        click: function(){
            console.log("you clicked see more button");
            peopleViewedCollection.bySizeAndHigher(50);
        },

        render:function(){
            var data = this.model.toJSON();
            this.$el.html(this.options.template({items:data}));
            $('.people-who').html(this.el);
        }

    });


    var ProductPageView = Backbone.View.extend({
    	
    	
    	initialize: function() {
	    	cartItems.fetch({
	    		success: function(){
	    			console.log("fetched cart items from product initialize");
	    			mainHeaderView.render();
	    		}
	    	});
    	},

        render: function(){
            $('.selected-product').fadeOut(1000);
            var peopleViewedView = new peopleViewedListView({
                template: Handlebars.templates['people-who-viewed'],
                model: peopleViewedCollection
            });
            peopleViewedCollection.fetch();

            var buyingOptionsView = new BuyingOptionsView({
                template:Handlebars.templates['buying-options'],
                model: buyingOptionsModel
            });
            buyingOptionsView.render();
            var cartOptionsView = new CartOptionsView({
                template:Handlebars.templates['cart-options'],
                model: productModel
            });
            cartOptionsView.render();

            var carouselView = new CarouselView({
                template:Handlebars.templates['carousel']
            });

            var productDetails = new ProductDetails({
                template:Handlebars.templates['product-details']
            });

            var headerView = new HeaderView({
                template:Handlebars.templates['header']
            });
            $('.cart-page').hide();

            var product = function () {
                var o = $('.cart').offset();
                $('.selected-product').css({ 'top': o.top + 60,
                    'left': o.left - (750 - 120),
                    'border-radius':'5px'
                });
                $('.selected-product').slideDown(1000);
            }
            product();
        }

    });

    var productPageView = new ProductPageView({});
    return productPageView;

}
