<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="product-finder-filter-results">
    <div class="product-finder-filter-msg">
        <span class="item-counter item-counter-bold">{{matches}} matches</span><span class="item-counter"> for televisions fitting that criteria</span>
    </div>
    <input type="button" value="Clear Filters " class="product-finder-filter-clear-btn">
</div>
<div class="js-product-list shelf-view-container">
    <c:forEach var="product" items="${products}">
        <div class="shelf_item">
            <%@include file="product-view.jsp" %>
        </div>
    </c:forEach>
</div>
