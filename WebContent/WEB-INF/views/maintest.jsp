<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script>
  window.onload = function () {
    define("product/data", {"data":<c:out value="${data}" escapeXml="false" />});
    // Invoke onehg landing page view
    require(["views/app"], function () {});
  };
</script>
<html>
    <head>
        <script data-main="../app/main.js" src="../lib/require.js"></script>
        <link rel="stylesheet" media="screen" href="../styles/jquery-ui.css">
        <link rel="stylesheet" media="screen" href="../styles/bootstrap.css">
        <link rel="stylesheet" media="screen" href="../styles/product.css">
        <link rel="stylesheet" media="screen" href="../styles/item-shelf.css">
        <link rel="stylesheet" media="screen" href="../styles/carousel.css">
        <link rel="stylesheet" media="screen" href="../styles/index.css">
        <link rel="stylesheet" media="screen" href="../styles/footer.css">
        <link rel="stylesheet" media="screen" href="../styles/tabs.css">
        <link rel="stylesheet" media="screen" href="../styles/cart/cart.css">
        <link rel="stylesheet" media="screen" href="../styles/googlefonts.css">
        <link href='http://fonts.googleapis.com/css?family=Sintony:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <section class="tv-finder-main">
        <section class="product-finder-pov">
            <div class="gh-splash">
                <div class="title">Get More, For Less</div>
                <div class="banner">Find the perfect Television with our new <span class="finder">TVFinder</span><sup class="tm">TM</sup></div>
                <img src="../img/tv-finder-pov.png"/>
            </div>
            </section>
            <section class="js-shelf-filter product-finder-filter-container">
            </section>
            <div class="js-shelf-view">
                <%-- @include file="shelf-view.jsp" --%>
            </div>
        </section>
        </section>
        
        <footer class="js-global-footer footer">

            <form class="mailing-list" action="/">
                <input class="email" type="email" name="email" placeholder="Sign up for our Mailing List" title="Sign up for our Mailing List">
                <button class="sign-up" id="sign-up" type="submit" name="sign-up">Sign Up</button>
            </form>
        
            <div class="footer-links">
                <section class="column">
                    <h3>Get to know us</h3>
                    <a class="link" href="http://walmartstores.com/">Corporate</a>
                    <a class="link" href="http://walmartstores.com/aboutus">Our Story</a>
                    <a class="link" href="http://walmartstores.com/pressroom">News &amp; Views</a>
                    <a class="link" href="http://walmartstores.com/communitygiving">Giving Back</a>
                    <a class="link" href="http://walmartstores.com/sustainability">Global Responsibility</a>
                    <a class="link" href="http://walmartstores.com/investors">Investors</a>
                    <a class="link" href="http://walmartstores.com/suppliers">Suppliers</a>
                    <a class="link" href="http://walmartstores.com/careers">Careers</a>
                </section>
        
                <section class="column">
                    <h3>Walmart.com</h3>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=542412">About Walmart.com</a>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=538449">Terms of Use</a>
                    <a class="link" href="http://affiliates.walmart.com/aff_home.jsp">Affiliate Program</a>
                    <a class="link" href="http://public.conxport.com/walmart/sponsorship/home.aspx">Sponsorship Submission</a>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=538456">International Customers</a>
                    <a class="link" href="http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879">About Our Ads</a>
                    <a class="link" href="http://www.walmart.com/cservice/ca_storefinder.gsp">Store Finder</a>
                    <a class="link" href="http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON">Printable Coupons</a>
                    <a class="link" href="http://www.walmart.com/wf.gsp/a_d_registration_flow/landing">Associate Discount</a>
                    <a class="link" href="http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer">Privacy &amp; Security</a>
                    <a class="link" href="http://walmartstores.com/9243.aspx#California">California Privacy Rights</a>
                    <a class="link" href="http://www.WalmartLabs.com">@WalmartLabs</a>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=121828">See All Departments</a>
                </section>
        
                <section class="column">
                    <h3>Help</h3>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=5436">Help Center</a>
                    <a class="link" href="http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2">Track Your Order</a>
                    <a class="link" href="http://www.walmart.com/catalog/catalog.gsp?cat=538459">Returns Policy</a>
                    <a class="link" href="http://www.walmart.com/returns/returns_type.gsp">Return an Item</a>
                    <a class="link" href="http://walmartstores.com/Recalls/">Product Recalls</a>
                    <a class="link" href="http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8">Contact Us</a>
                    <a class="link" href="">Feedback</a>
                </section>
        
                <section class="column">
                    <h3>In the spotlight</h3>
                    <a class="link" href="">Black Friday</a>
                    <a class="link" href="">Cyber Monday</a>
                    <a class="link" href="">Thanksgiving</a>
                    <a class="link" href="">Laptops</a>
                    <a class="link" href="">iPads and Tablets</a>
                    <a class="link" href="">Appliances</a>
                    <a class="link" href="">TVs</a>
                    <a class="link" href="">Toys</a>
                    <a class="link" href="">eGift Cards</a>
                    <a class="link" href="">Best Sellers</a>
                    <a class="link" href="">New Arrivals</a>
                    <a class="link" href="">Top-Rated Items</a>
                </section>
        
                <aside>
                    <h3>Walmart Money Centre</h3>
                    <a class="" href=""><img src="/images/money_center.png" alt="Walmart Money Center" width="310" height="304"></a>
                </aside>
            </div>
        
        </footer>
    </body>
</html>
