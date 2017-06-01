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
// See: /js/varien/form.js
// ==============================================

Object.extend(RegionUpdater.prototype, {
    /**
     * GravDept:
     * Override for ".gravdept-select" pattern.
     */
    update: function () {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }
            if (this.regionSelectEl && this.regionSelectEl.value && !def) {
                def = this.regionSelectEl.value;
            }

            this.regionSelectEl.options.length = 1;
            for (var regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId === def || (region.name && region.name.toLowerCase() === def) ||
                    (region.name && region.code.toLowerCase() === def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }

            if (this.disableAction === 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';

                // GravDept: remove inline "display" on ".gravdept-select"
                this.regionSelectEl.up('.gravdept-select').style.display = '';
            } else if (this.disableAction === 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;

                // GravDept: remove disabled modifier from ".gravdept-select"
                this.regionSelectEl.up('.gravdept-select').removeClassName('gravdept-select--disabled');
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            if (this.disableAction === 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';

                // GravDept: set ".gravdept-select" to "display:none"
                this.regionSelectEl.up('.gravdept-select').style.display = 'none';

                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction === 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;

                // GravDept: add disabled modifier to ".gravdept-select"
                this.regionSelectEl.up('.gravdept-select').addClassName('gravdept-select--disabled');
            } else if (this.disableAction === 'nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    }
});
