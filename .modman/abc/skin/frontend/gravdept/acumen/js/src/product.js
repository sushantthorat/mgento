/**
* Acumen - Magento Theme
* http://gravitydept.com/to/acumen
*
* @author     Brendan Falkowski
* @package    gravdept_acumen
* @copyright  2010-2016 Gravity Department. All rights reserved.
* @version    2.0.0
*/


// ==============================================
// PhotoSwipe
// ==============================================

/**
 * @param {number} startIndex - Index of the slide to start on.
 */
function launchPhotoswipe (startIndex) {
    var photoswipeTemplate = document.querySelectorAll('.pswp')[0];

    // Var "photoswipeItems" is defined in the PHTML template.
    // See: /catalog/product/view/media.phtml

    // Options.
    // See: http://photoswipe.com/documentation/options.html
    var photoswipeOptions = {
        bgOpacity: 0.8,
        index: startIndex,     // Index of slide to start with
        showHideOpacity: true, // Animate image and overlay

        // Toggle element visibility
        arrowEl:      true,
        captionEl:    true,
        closeEl:      true,
        counterEl:    true,
        fullscreenEl: true,
        preloaderEl:  true,
        shareEl:      false,
        zoomEl:       true
    };

    var photoswipeGallery = new PhotoSwipe(
        photoswipeTemplate,
        PhotoSwipeUI_Default,
        photoswipeItems,
        photoswipeOptions
    );

    photoswipeGallery.init();
}


// ==============================================
// PhotoSwipe Events
// ==============================================

var $pswp = jQuery('.pswp');

if ($pswp.length) {
    // Trigger PhotoSwipe
    jQuery('.pdp-media_main-image').on('click', function (e) {
        e.preventDefault();

        launchPhotoswipe(
            parseInt(jQuery(this).attr('data-photoswipe-index'))
        );
    });

    // Thumbnail becomes main image
    jQuery('.thumbnail-list_link').on('click', function (e) {
        e.preventDefault();

        var $self    = jQuery(this);
        var imageUrl = $self.attr('href');
        var index    = $self.attr('data-photoswipe-index');

        jQuery('.pdp-media_main-image')
            .attr('href', imageUrl)
            .attr('data-photoswipe-index', index);

        jQuery('.pdp-media_main-image img')
            .attr('src', imageUrl);
    });
}
