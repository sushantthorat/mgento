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
// GravDept:
// Extend Magento's core JS.
// See: /js/prototype/validation.js
// ==============================================

Object.extend(Validation, {
    /**
     * GravDept:
     * Override for ".gravdept-select" pattern.
     */
    insertAdvice: function (elm, advice){
        var container = $(elm).up('.field-row');

        if (container){
            Element.insert(container, {after: advice});
        } else if (elm.up('td.value')) {
            elm.up('td.value').insert({bottom: advice});
        } else if (elm.advaiceContainer && $(elm.advaiceContainer)) {
            $(elm.advaiceContainer).update(advice);
        } else {
            switch (elm.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    var p = elm.parentNode;
                    if(p) {
                        Element.insert(p, {'bottom': advice});
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
                    break;
                default:
                    // GravDept:
                    // Insert validation advice after ".gravdept-select" not after the "<select>".
                    // Prevents breaking the CSS.
                    if (elm.tagName.toLowerCase() === 'select') {
                        var customSelectElem = elm.up('.gravdept-select');

                        if (typeof customSelectElem !== 'undefined') {
                            Element.insert(customSelectElem, {'after': advice});
                        } else {
                            Element.insert(elm, {'after': advice});
                        }
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
            }
        }
    }
});
