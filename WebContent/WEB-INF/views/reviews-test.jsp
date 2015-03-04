<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script>
  window.onload = function () {
    require(["views/reviews-app"], function () {});
  };
</script>
<html>
    <head>
        <script data-main="/product-loader/app/main.js" src="/product-loader/lib/require.js"></script>
        <link rel="stylesheet" media="screen" href="/product-loader/styles/jquery-ui.css">
        <link rel="stylesheet" media="screen" href="/product-loader/styles/bootstrap.css">
        <link rel="stylesheet" media="screen" href="/product-loader/styles/reviews.css">
    </head>
    <body>
        <div class="js-reviews-main reviews-main">
        </div>
        
        <footer class="js-global-footer footer">
        </footer>
    </body>
</html>
