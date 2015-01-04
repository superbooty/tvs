<div class="shelf-item-img">
    <a href="#/product/${product.id }"><img class="lazy" src="${product.image}"/></a>
</div>
<div class="shelf-item-name">
    ${product.name}
</div>
<div class="shelf-item-desc">
    ${product.description}
</div>
<div class="shelf-item-price">
    ${product.dispPrice.dollars}<span class="dollar">.${product.dispPrice.cents}</span></span>
</div>
<div class="product-rating shelf-item-rating " >
    <span class="gray">
        <span class="gold" style="width:${product.rating}">
        </span>
    </span>
</div>