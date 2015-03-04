<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js-reviews">
	<div class="js-reviews-container reviews-container">
		<div class="js-reviews">
			<ul id="js-review-list" class="review-list">
				<c:forEach var="review" items="${reviews}">
					<li>
						<div class="review review-text">
							<div class="review-title">Review</div>
							<div class="review-seg">${review.name}</div>
							<div class="review-seg">${review.description}</div>
							<div class="product-rating shelf-item-rating " >
							    <span class="gray">
							        <span class="gold" style="width:${review.rating * 20}">
							        </span>
							    </span>
							</div>
						</div>
					</li>
				</c:forEach>
			</ul>
		</div>
	</div>
</div>