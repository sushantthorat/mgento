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
// App
// ==============================================

// Avoid PrototypeJS conflicts.
jQuery.noConflict();

// Cache selectors
var $document = jQuery(document);
var $body     = jQuery('body');



// ==============================================
// Browser detection
// See: /skin/.../js/src/vendor/gravdept.user-agent.js
// ==============================================

// Enable click events to bubble to the "document" in iOS Safari.
// See: http://gravitydept.com/blog/js-click-event-bubbling-on-ios
// See: /skin/.../scss/module/_shame.scss
if (gravdept.ua.isIos()) {
    jQuery('html').addClass('is-ios');
}
