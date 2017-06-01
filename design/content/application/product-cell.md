---
name: Product Cell
enabled: true
wrappers: container
description: >
  The `.product-cell` pattern is combined with the `.media` pattern, and adds balanced bottom margins to elements within the `.media_body`. This avoid needing to replicate the same spacing in multiple contexts.

  ### Image

  `100x100`. Scaled to `75x75` on smaller screens.
---

<div class="media product-cell">
    <div class="media_item">
        <a class="product-image" href="#">
            <img src="http://placehold.it/100" alt="#">
        </a>
    </div>

    <div class="media_body">
        <a class="product-name" href="#">
            Product Name That Is Extra Long
        </a>

        <div class="clone-price">
            <div class="price-box">
                <span class="regular-price">
                    <span class="price">$4,938.00</span>
                </span>
            </div>
        </div>

        <ul class="item-options-list">
            <li>
                <strong>Color:</strong>
                <span>Black</span>
            </li>

            <li>
                <strong>Size:</strong>
                <span>Large</span>
            </li>
        </ul>

        <a class="edit-options-link" href="#">
            Edit Options
        </a>
    </div>
</div>
