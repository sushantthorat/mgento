/**
* Gravity Department - Frontend Toolkit
* http://gravitydept.com
*
* @author     Brendan Falkowski
* @copyright  2010-2016 Gravity Department. All rights reserved.
*/


// ==============================================
// GravDept Functions
// Reusable functions for the frontend.
// ==============================================

var gravdept = {
    /**
     * Add to cart from list with quantity.
     *
     * @param {string} url - The URL to add a single product to cart.
     * @param {string} qty - The quantity to add.
     */
    addWithQuantity: function (url, qty) {
        if (parseInt(qty) > 0) {
            url += 'qty/' + qty + '/';
        }

        window.location.href = url;
    },

    /**
     * Clone price from table cell to another element.
     * Replace <div> with <span>.
     */
    clonePriceInTable: function () {
        jQuery('[data-clone-price-origin]').each(function () {
            var $self = jQuery(this);

            var priceHtml = $self
                .html()
                .replace(/<div/g, '<span')
                .replace(/<\/div>/g, '</span>');

            $self.parent().find('.clone-price').html(priceHtml);
        });
    },

    /**
     * Disable button for AJAX processing.
     *
     * @param {object} elem  - "this" the clicked element.
     * @param {string} label - Label to use while processing.
     */
    disableButton: function (elem, label) {
        var $button = jQuery(elem);

        $button
            .attr('data-initial-label', $button.html())
            .prop('disabled', true)
            .html(label)
            .addClass('button--loading');
    },

    /**
     * Enable button after AJAX processing.
     *
     * @param {object} elem - "this" the clicked element.
     */
    enableButton: function (elem) {
        var $button = jQuery(elem);

        $button
            .prop('disabled', false)
            .html($button.attr('data-initial-label'))
            .removeClass('button--loading');
    },

    /**
     * Make a human-readable price from a number.
     *
     * @param {number} price
     * @returns {string}
     */
    formatPrice: function (price) {
        if (price < 0) {
            return '-$' + (price * -1).toFixed(2);
        } else {
            return '$' + price.toFixed(2);
        }
    },

    /**
     * Add a leading zero to a single-digit number.
     *
     * @param {string} num
     * @returns {string}
     */
    leadingZero: function (num) {
        if (num > 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    },

    /**
     * Scroll to element.
     * See: http://www.dconnell.co.uk/blog/index.php/2012/03/12/scroll-to-any-element-using-jquery/
     *
     * @param {string} selector       - A CSS-like selector of the element to scroll to.
     * @param {number} time           - Time in milliseconds.
     * @param {number} verticalOffset - Pixel offset from actual position (positive or negative).
     */
    scrollToElement: function (selector, time, verticalOffset) {
        var time = typeof(time) != 'undefined' ? time : 1000;
        var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        var element = jQuery(selector);
        var offset = element.offset();
        var offsetTop = offset.top + verticalOffset;

        jQuery('html, body').animate({
            scrollTop: offsetTop
        }, time);
    },

    /**
     * Show modal.
     *
     * @param {string} header   - The modal header (remember to add <h1>).
     * @param {string} body     - The modal body (as HTML).
     * @param {string} footer   - The modal footer (as HTML).
     * @param {string} maxWidth - Max width of the modal.
     */
    showModal: function (header, body, footer, maxWidth) {
        maxWidth = (typeof maxWidth !== 'undefined') ? maxWidth : 'medium';

        var markup = [
            '<div class="modal-header">' + header + '</div>',
            '<div class="modal-body">' + body + '</div>',
            (typeof footer !== 'undefined') ? ('<div class="modal-footer">' + footer + '</div>') : ''
        ];

        jQuery.fn.modal({
            contentInline: markup.join(''),
            maxWidth: maxWidth,
            showImmediately: true,
            type: 'inline'
        });
    }
};
