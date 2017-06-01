/**
* Acumen - Magento Theme
* http://gravitydept.com/to/acumen
*
* @author     Brendan Falkowski
* @package    gravdept_acumen
* @copyright  2010-2016 Gravity Department. All rights reserved.
* @version    2.0.0
*/


// **********************************************
// App - Header
// **********************************************


// ==============================================
// Hide UI components when clicking outside their boundaries
// ==============================================

$document.on('click', function (e) {
    var $target  = jQuery(e.target);
    var $parents = $target.parents();


    // ----------------------------------------------
    // Header

    var isChildOfTriggerList = ($parents.index(jQuery('.trigger-list')) === -1);
    var isChildOfHeaderBar   = ($parents.index(jQuery('.header-bar')) === -1);

    if (isChildOfTriggerList && isChildOfHeaderBar) {
        $body.attr('data-ui', '');
    }


    // ----------------------------------------------
    // Offscreen - Catalog (category + search)

    if ($target.hasClass('offscreen-catalog_content')) {
        jQuery('[data-offscreen=catalog]').trigger('click');
    }
});



// ==============================================
// Toggle header components
// ==============================================

jQuery('.skip-link, .trigger-link, .nav-link').on('click', function (e) {
    var $self = jQuery(this);

    if (
        $self.hasClass('nav-link')
        && $self.hasClass('nav-link--menu') === false
    ) {
        return; // Allow the link to be clicked
    }

    e.preventDefault();
    e.stopPropagation();

    var oldUi = $body.attr('data-ui');
    var newUi = $self.attr('data-ui-action');

    // Check "newUi" had an attribute
    if (typeof newUi !== 'undefined') {
        // Check if UI element was a category
        if (newUi.indexOf('cat') !== -1) {
            // Replace "cat" with "nav"
            // See: http://magento.stackexchange.com/questions/57772/the-curious-case-of-the-phantom-navigation-decorator-striking-magentos-ee-cache
            newUi = newUi.replace('cat', 'nav');
        }

        // Show/hide components
        if (oldUi === newUi) {
            // Nav item clicked within small screen UI
            if (newUi.indexOf('nav-') !== -1 && Modernizr.mq('only screen and (max-width: 767px)')) {
                // Hide nav item, but keep nav visible
                $body.attr('data-ui', 'nav');
            } else {
                // Hide component
                $body.attr('data-ui', '');
            }
        } else {
            // Show component
            $body.attr('data-ui', newUi);
        }

        // Autofocus search input
        if (newUi === 'search') {
            jQuery('#search').focus();
        }
    }
});
