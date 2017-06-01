/**
 * Show/Hide Header
 */
(function() {
    var header = document.querySelector(".site-header");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        offset : 200
    });
    headroom.init();
}());


/**
 * Initiate priorityNav
 */
jQuery(document).ready(function(){
	var wrapper = document.querySelector(".nav-wrapper");
	var nav = priorityNav.init({
	    mainNavWrapper: ".nav-wrapper", // mainnav wrapper selector (must be direct parent from mainNav)
	    mainNav: ".nav-ul", // mainnav selector. (must be inline-block)
	    navDropdownLabel: 'More',
	    navDropdownClassName: "nav__dropdown", // class used for the dropdown.
	    navDropdownToggleClassName: "nav__dropdown-toggle", // class used for the dropdown toggle.
			breakPoint: 1,
	});
});



/**
 * Off-canvas/Mobile Menu
 */
jQuery(document).ready(function(){
  jQuery('.menu-trigger,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    jQuery('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
		jQuery('.menu-trigger span').toggleClass('icon-menu');
		jQuery('.menu-trigger span').toggleClass('icon-cross');
    e.preventDefault();
  });
});




/**
 * Search Box
 */
jQuery(document).ready(function() {
  jQuery('.tsearch-trigger').click(function(){
    jQuery('.tsearch-content').toggleClass("tsearch-hidden");
  });
});


/**
 * Mega Menu Example
 */
jQuery(document).ready(function() {
  jQuery('.megamenu-trigger').mouseenter(function(){
    jQuery('.megamenu-content').toggleClass("megamenu-hidden");
		jQuery('.site-header').toggleClass("megamenu-open");
  });
  jQuery('.megamenu-content').mouseleave(function(){
    jQuery('.megamenu-content').toggleClass("megamenu-hidden");
		jQuery('.site-header').toggleClass("megamenu-open");
  });
});



/**
 * Tabs
 */
jQuery(document).ready(function () {
  jQuery('.accordion-tabs').each(function(index) {
    jQuery(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  jQuery('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!jQuery(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = jQuery(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      jQuery(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      jQuery(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
