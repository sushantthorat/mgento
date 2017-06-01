---
name: Tab Carousel
enabled: true
wrappers: container
description: >
    ### Slide count

    The carousel supports 3 or 4 slides. Two slides is not supported because it's more effective to place two "hero" patterns. Five or more slides is not supported because engagement flatlines after the third slide.

    ### Slide content

    Each slide has one call-to-action surrounding an image. Slides are always linked to related content.

    Note: the placement of navigational buttons overlaying the slide content. Ensure your graphical composition has sufficient white-space equal to the button dimensions around each button.

    ### Assets

    Each slide requires two assets for the same campaign. They have the same content but different composition to suit the range of devices for which that asset is visible.

    Asset sizes to produce and upload to the CDN:

    <table class="table">
        <tr>
            <th>Asset: Large</th>
            <td>1200 &times; 500 (@1x)</td>
        </tr>

        <tr>
            <th>Asset: Small</th>
            <td>600 &times; 250 (@1x)</td>
        </tr>
    </table>

    ### Tabs

    The tabbed pagination is generated automatically from the `<img alt="">` attribute, which is required for each image in the carousel.
---

<div class="tab-carousel">
    <div class="owl-carousel">
        <a class="tab-carousel_link" href="#">
            <picture>
                <source srcset="http://placehold.it/1200x500/cc5de8/ffffff" media="(min-width: 600px)">
                <img srcset="http://placehold.it/600x250/cc5de8/ffffff" alt="Nulla facilisi duis aliquet egestas purus in blandit Nulla facilisi duis aliquet egestas purus in blandit">
            </picture>
        </a>

        <a class="tab-carousel_link" href="#">
            <picture>
                <source srcset="http://placehold.it/1200x500/f06595/ffffff" media="(min-width: 600px)">
                <img srcset="http://placehold.it/600x250/f06595/ffffff" alt="Two Two Two">
            </picture>
        </a>

        <a class="tab-carousel_link" href="#">
            <picture>
                <source srcset="http://placehold.it/1200x500/22b8cf/ffffff" media="(min-width: 600px)">
                <img srcset="http://placehold.it/600x250/22b8cf/ffffff" alt="Nulla facilisi duis aliquet egestas purus in blandit">
            </picture>
        </a>

        <a class="tab-carousel_link" href="#">
            <picture>
                <source srcset="http://placehold.it/1200x500/94d82d/ffffff" media="(min-width: 600px)">
                <img srcset="http://placehold.it/600x250/94d82d/ffffff" alt="Four four four">
            </picture>
        </a>
    </div>
</div>
