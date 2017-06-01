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
// Toggle filter facets
// ==============================================

jQuery('.filters_facet-list').find('dt').on('click', function (e) {
    e.preventDefault();

    var $self = jQuery(this);
    var isVisible = $self.attr('data-facet-visible');

    if (isVisible === 'true') {
        $self.attr('data-facet-visible', 'false');
        $self.next().attr('data-facet-visible', 'false');
    } else {
        $self.attr('data-facet-visible', 'true');
        $self.next().attr('data-facet-visible', 'true');
    }
});



// ==============================================
// Show more/less options in filter
// ==============================================

jQuery('.filters_toggle-all-options-link').on('click', function (e) {
    e.preventDefault();

    var $self       = jQuery(this);
    var $parentList = $self.parents('.filters_option-list');
    var state       = $parentList.attr('data-show-all-facets');

    if (state === 'true') {
        $parentList.attr('data-show-all-facets', '');
        $self.html($self.data('toggleFacetOptionsMore'));
    } else {
        $parentList.attr('data-show-all-facets', 'true');
        $self.html($self.data('toggleFacetOptionsLess'));
    }
});



// ==============================================
// Show counter for active filters
// ==============================================

var $filtersActiveList = jQuery('.filters_active-list').find('li');

if ($filtersActiveList.length) {
    jQuery('[data-offscreen="catalog"]')
        .find('.count')
        .html($filtersActiveList.length + ' ' + Translator.translate('active'))
        .attr('data-filters-count', $filtersActiveList.length);
}
