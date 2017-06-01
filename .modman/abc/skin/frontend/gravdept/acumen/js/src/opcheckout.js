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
// See: /skin/.../js/opcheckout.js
// ==============================================

Object.extend(Checkout.prototype, {
    reloadStep: function(prevStep) {
        var updater = new Ajax.Updater(prevStep + '-progress-opcheckout', this.progressUrl, {
            method: 'get',
            onFailure: this.ajaxFailure.bind(this),
            onComplete: function(){
                this.checkout.resetPreviousSteps();

                // GravDept:
                // Teleport the progress block to the "review" step after AJAX update finishes.
                var opcProgressTeleporter = $$('.opc-progress-teleporter')[0];

                // GravDept:
                // Make sure the element exists (after review step is loaded).
                // JS will fail otherwise.
                if (opcProgressTeleporter) {
                    opcProgressTeleporter.innerHTML = $$('.opc-progress')[0].innerHTML;
                }
            },
            parameters: prevStep ? { prevStep:prevStep } : null
        });
    },

    setLoadWaiting: function (step, keepDisabled) {
        var container;

        if (step) {
            if (this.loadWaiting) {
                this.setLoadWaiting(false);
            }

            container = $(step + '-buttons-container');
            container.addClassName('disabled');

            // GravDept:
            // Disable. Handle styling in CSS.
            //container.setStyle({opacity:.5});

            this._disableEnableAll(container, true);
            Element.show(step + '-please-wait');
        } else {
            if (this.loadWaiting) {
                container = $(this.loadWaiting + '-buttons-container');
                var isDisabled = (keepDisabled ? true : false);

                if (!isDisabled) {
                    container.removeClassName('disabled');

                    // GravDept:
                    // Disable. Handle styling in CSS.
                    //container.setStyle({opacity:1});
                }

                this._disableEnableAll(container, isDisabled);
                Element.hide(this.loadWaiting + '-please-wait');
            }
        }

        this.loadWaiting = step;
    },

    gotoSection: function (section, reloadProgressBlock) {
        if (reloadProgressBlock) {
            this.reloadProgressBlock(this.currentStep);
        }

        this.currentStep = section;
        var sectionElement = $('opc-' + section);
        sectionElement.addClassName('allow');
        this.accordion.openSection('opc-' + section);

        if (!reloadProgressBlock) {
            this.resetPreviousSteps();
        }

        // GravDept:
        // Scroll the viewport backward when advancing steps to help orient user.
        if (document.viewport.getHeight() <= 600) {
            // Or scroll to next step's header (better visibility for next step).
            Effect.ScrollTo(sectionElement, {
                duration:'0.2'
            });

            // Or scroll to accordion top (better sense of context).
            /*
            var accordionElement = $('checkout-steps');
            Effect.ScrollTo(accordionElement, {
               duration: '0.2'
            });
            */
        }
    },

    resetPreviousSteps: function () {
        var stepIndex = this.steps.indexOf(this.currentStep);

        //Clear other steps if already populated through javascript
        for (var i = stepIndex; i < this.steps.length; i++) {
            var nextStep = this.steps[i];
            var progressDiv = nextStep + '-progress-opcheckout';

            if ($(progressDiv)) {
                // GravDept:
                // Remove the link.
                // Change the selector from ".changelink" to ".opc-progress_button".
                $(progressDiv).select('.opc-progress_button').each(function (item) {
                    item.remove();
                });

                // GravDept:
                // Mark element not complete.
                // Change the selector from "dt" to ".opc-progress_title".
                $(progressDiv).select('.opc-progress_title').each(function (item) {
                    item.removeClassName('complete');
                });

                // GravDept:
                // Replace the content.
                // Change the selector from "dd.complete" to ".opc-progress_content.complete".
                $(progressDiv).select('.opc-progress_content.complete').each(function (item) {
                    item.update(
                        Translator.translate('Pending')
                    );
                });
            }
        }
    }
});


Object.extend(Payment.prototype, {
    initWhatIsCvvListeners: function () {
        // GravDept:
        // Not used. Disable this.
        /*
        $$('.cvv-what-is-this').each(function(element){
            Event.observe(element, 'click', toggleToolTip);
        });
        */
    }
});
