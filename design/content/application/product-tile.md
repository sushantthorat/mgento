---
name: Product Tile
enabled: true
wrappers: container
---

<div class="product-tile">
    <a class="product-image" href="#">
        <picture>
            <source srcset="http://placehold.it/290x290" media="(min-width: 706px)">
            <img srcset="http://placehold.it/120x120" alt="#">
        </picture>

        <ul class="badge-list">
            <li class="badge-list_item badge-list_item--new">
                New
            </li>
        </ul>
    </a>

    <a class="product-name" href="#">Apple MacBook Pro</a>

    <div class="price-box">
        <span class="regular-price">
            <span class="price">$315.00</span>
        </span>
    </div>

    <div class="product-actions">
        <div class="add-to-cart-wrapper">
            <input type="text" pattern="[0-9]*" class="input-text qty placeholder--s" placeholder="QTY: 1">

            <button class="button btn-cart button--cta">Add to Cart</button>
        </div>

        <ul class="alternate-actions-list">
            <li><a class="add-to-list-link button button--s button-block button--subtle" href="#">Save to List</a></li>
            <li><a class="add-to-compare-link button button--s button-block button--subtle" href="#">Compare</a></li>
        </ul>
    </div>
</div>
