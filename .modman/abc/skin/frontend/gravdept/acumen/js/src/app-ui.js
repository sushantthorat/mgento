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
// GravDept:
// Init UI components that are available sitewide.
// **********************************************



// =============================================
// FitVids
// =============================================

if (jQuery().fitVids) {
    var $video = jQuery('.video');

    if ($video.length) {
        $video.fitVids();
    }
}



// ==============================================
// GravDept Modal
// ==============================================

if (jQuery().modal) {
    var $modalButtons = jQuery('[data-modal]');

    if ($modalButtons.length) {
        $modalButtons.modal();
    }
}



// ==============================================
// Offscreen
// ==============================================

jQuery('[data-offscreen]').on('click', function (e) {
    var $self      = jQuery(this);
    var $label     = $self.find('.label');
    var $offscreen = jQuery('.offscreen-' + $self.attr('data-offscreen'));

    $offscreen.toggleClass('active');

    if ($offscreen.hasClass('active')) {
        $label.html(
            $self.attr('data-offscreen-hide')
        );
    } else {
        $label.html(
            $self.attr('data-offscreen-show')
        );
    }
});



// ==============================================
// Product Carousel
// ==============================================

if (jQuery().owlCarousel) {
    var $productCarousel = jQuery('.product-carousel_items');

    if ($productCarousel.length) {
        $productCarousel.owlCarousel({
            itemsCustom: [
                [0, 2],
                [450, 3],
                [700, 4],
                [950, 5],
                [1200, 6]
            ],
            lazyLoad: true,
            navigation: true,
            navigationText: ['Previous', 'Next'],
            pagination: false,
            rewindNav: false,
            scrollPerPage: true,
            slideSpeed: 300,
            theme: false
        });
    }
}



// ==============================================
// Scroll X
// ==============================================

// Depends: Modernizr
// Depends: Enquire JS

jQuery('[data-scroll-x]').each(function () {
    var $self      = jQuery(this);
    var breakpoint = $self.attr('data-scroll-x');

    enquire.register('screen and (min-width: ' + breakpoint + 'px)', {
        setup: function () {
            if (Modernizr.mq('only screen and (min-width: ' + breakpoint + 'px)')) {
                $self.attr('data-scroll-x', '');
            } else {
                $self.attr('data-scroll-x', 'scroll');
            }
        },
        match: function () {
            $self.attr('data-scroll-x', '');
        },
        unmatch: function () {
            $self.attr('data-scroll-x', 'scroll');
        }
    });
});



// ==============================================
// Stepper
// ==============================================

$document.on('click', '.stepper_button', function (e) {
    e.preventDefault();

    var $self        = jQuery(this);
    var $input       = $self.siblings('.stepper_input');
    var initialValue = $input.val();
    var maxQuantity  = 1000000;

    // Check if button is disabled
    if ($self.hasClass('disabled') === false) {
        // Increment
        if ($self.hasClass('stepper_button--up') && initialValue > 0) {
            if (initialValue < maxQuantity) {
                $input.val(parseFloat(initialValue) + 1);
            }
        }
        // Decrement
        else if ($self.hasClass('stepper_button--down') && initialValue > 1) {
            $input.val(parseFloat(initialValue) - 1);
        }
        // Fallback: reset to 1
        else {
            $input.val(1);
        }
    }
});



// ==============================================
// Tab Accordion
// ==============================================

var $tabAccordions = jQuery('.tab-accordion');

// If changed, also change CSS.
// See: /skin/.../scss/component/tab-accordion.scss
var tabAccordionBreakpoint = 800;

$tabAccordions.each(function () {
    var $tabAccordion = jQuery(this);
    var $sections     = jQuery('.tab-accordion_section');
    var navHtml       = '';


    // ----------------------------------------------
    // Build nav

    $sections.each(function () {
        var $section  = jQuery(this);
        var hideClass = '';

        // Check for disabled section
        if ($section.hasClass('no-display')) {
            hideClass = 'no-display';
        }

        var html = [
            '<a class="tab-accordion_nav-link ' + hideClass + '" href="#' + $section.attr('id') + '">',
                $section.find('.tab-accordion_title').text(),
            '</a>'
        ];

        navHtml += html.join('');
    });

    navHtml = '<nav class="tab-accordion_nav">' + navHtml + '</nav>';
    $tabAccordion.prepend(navHtml);


    // ----------------------------------------------
    // Tab Mode (large screens)
    // Detect click on nav item

    var $links = jQuery('.tab-accordion_nav-link');

    $links.on('click', function (e) {
        e.preventDefault();

        var $link = jQuery(this);

        // Hide all content, then show content for hash
        $sections
            .removeClass('tab-accordion_section--active')
            .filter(this.hash)
            .addClass('tab-accordion_section--active');

        // Set hash of last opened section
        $tabAccordion.attr('data-tab-accordion-hash', this.hash);
        window.history.replaceState({}, '', this.hash);

        // Remove '--active' modifier from all nav links
        $links.removeClass('tab-accordion_nav-link--active');

        // Add '--active' modifier to clicked nav link
        $link.addClass('tab-accordion_nav-link--active');
    });


    // ----------------------------------------------
    // Accordion mode (small screens)
    // Detect click on title

    var $titles = jQuery('.tab-accordion_title');

    $titles.on('click', function () {
        if (Modernizr.mq('(max-width: ' + (tabAccordionBreakpoint - 1) + 'px)')) {
            var $title      = jQuery(this);
            var $section    = $title.parent('.tab-accordion_section');
            var sectionId   = $section.attr('id');
            var sectionHash = '#' + sectionId;

            // Toggle clicked section
            $section.toggleClass('tab-accordion_section--active');

            // Set hash of last opened section
            $tabAccordion.attr('data-tab-accordion-hash', sectionHash);
            window.history.replaceState({}, '', sectionHash);

            // Remove '--active' modifier from all links
            $links.removeClass('tab-accordion_nav-link--active');

            // Add '--active' modifier to clicked link
            jQuery('.tab-accordion_nav-link[href="' + sectionHash + '"]').addClass('tab-accordion_nav-link--active');
        }
    });


    // ----------------------------------------------
    // Swap

    enquire.register('(min-width: ' + tabAccordionBreakpoint + 'px)', {
        setup: function () {
            // Nothing
        },
        match: function () {
            // Set everything inactive
            $links.removeClass('tab-accordion_nav-link--active');
            $sections.removeClass('tab-accordion_section--active');

            // Set last opened section active
            var hash = $tabAccordion.attr('data-tab-accordion-hash');
            jQuery(hash).addClass('tab-accordion_section--active');
            jQuery('.tab-accordion_nav-link[href="' + hash + '"]').addClass('tab-accordion_nav-link--active');
        },
        unmatch: function () {
            // Nothing
        }
    });


    // ----------------------------------------------
    // Set initial state

    // Detect if the page loaded with a hash
    if (window.location.hash) {
        var $hashTarget = jQuery('.tab-accordion_nav-link[href="' + window.location.hash + '"]');

        if ($hashTarget.length) {
            $hashTarget.click();
        }
    } else {
        // Set the initial state
        var hash = $links.filter(':first').attr('href');
        $tabAccordion.attr('data-tab-accordion-hash', hash);

        if (Modernizr.mq('(min-width: ' + tabAccordionBreakpoint + 'px)')) {
            // Large screens:
            // Preset the first section immediately
            $sections.filter(':first').addClass('tab-accordion_section--active');
            $links.filter(':first').addClass('tab-accordion_nav-link--active');
        } else {
            // Small screens:
            // Keep all sections collapsed
        }
    }
});



// ==============================================
// Tab Carousel
// See: https://github.com/OwlFonk/OwlCarousel/issues/550
// ==============================================

function updateTabCarouselPagination ($carousel) {
    var $images = $carousel.find('.owl-item img');
    var $pages  = $carousel.find('.owl-page');
    var titles  = [];
    var i       = 0;

    // Set pagination count
    $carousel.attr('data-tab-carousel-count', $images.length);

    // Get titles from image "alt" attributes.
    $images.each(function () {
        titles.push(jQuery(this).attr('alt'));
    });

    // Apply titles to ".owl-page" elements
    $pages.each(function () {
        jQuery(this).append(titles[i]);
        i++;
    });
}

if (jQuery().owlCarousel) {
    var $tabCarousels = jQuery('.tab-carousel').find('.owl-carousel');

    if ($tabCarousels.length) {
        $tabCarousels.owlCarousel({
            navigation: true,
            navigationText: ['Previous', 'Next'],
            pagination: true,
            paginationSpeed: 0,
            rewindNav: false,
            singleItem: true,
            slideSpeed: 300,
            theme: false,
            afterInit: function ($self) {
                updateTabCarouselPagination($self);
            },
            afterUpdate: function ($self) {
                updateTabCarouselPagination($self);
            }
        });
    }
}



// ==============================================
// Tabs
// ==============================================

var $tabComponents = jQuery('.tabs');

$tabComponents.each(function () {
    var $tabComponent = jQuery(this);
    var $sections     = $tabComponent.find('.tabs_section');
    var $links        = $tabComponent.find('.tabs_nav-link');

    // Detect click on nav item
    $links.on('click', function (e) {
        e.preventDefault();

        var $link = jQuery(this);

        // Hide all content, then show content for hash
        $sections
            .removeClass('tabs_section--active')
            .filter(this.hash)
            .addClass('tabs_section--active');

        // Set hash of last opened section
        window.history.replaceState({}, '', this.hash);

        // Remove '--active' modifier from all links
        $links.removeClass('tabs_nav-link--active');

        // Add '--active' modifier to clicked link
        $link.addClass('tabs_nav-link--active');
    });

    // Detect if page was loaded with a hash
    if (window.location.hash) {
        var hashTarget = $tabComponent.find('.tabs_nav-link[href="' + window.location.hash + '"]');

        if (hashTarget.length === 1) {
            hashTarget.click();
        }
    } else {
        // Set the initial state
        $links.filter(':first').click();
    }
});



// ==============================================
// Toggle
// ==============================================

$document.on('click', '[data-toggle-trigger]', function (e) {
    e.preventDefault();

    var $elem     = jQuery(this).closest('[data-toggle]');
    var className = ($elem.attr('data-toggle') === 'show') ? 'hide' : 'show';

    $elem.attr('data-toggle', className);
});
