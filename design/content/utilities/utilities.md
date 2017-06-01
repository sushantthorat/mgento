---
name: Utilities
enabled: true
wrappers: container
description: >
    ## Purpose

    Utility classes do exactly one thing. They are absolute overrides that target one property at a time. Once created their role never changes.

    Utilities should be used as a last resort. Patterns should be designed to accomodate the widest range of content possible. Modifiers can be created to handle edge cases.

    Always check a pattern for a comparable modifier before using a utility class. Modifier are documented and tested against in the pattern library. Utilities are not.

    Utilities are useful to shim specific content into patterns for the best fit. If the same shim becomes commonplace, then the pattern should extend to handle that case.

    ## Usage

    ### Alignment

    Force text alignment.

    ### Border

    Used for zeroing borders.

    ### Display

    Used for toggling content with JS. Never used for hiding content (hurts performance).

    `hide-print` and `hide-web` are specifically for print styling.

    ### Flexbox

    Flexbox utilities.

    ### Margin

    Override top/bottom margins or assign `left/right: auto`.

    ### Padding

    Override top/bottom padding.

    ### Text Color

    Override text color.

    ### Text Size

    Override text size.

    ### White Space

    Prevent text from wrapping. Warning: may break layout on small screens.

    ### Width

    Force a width.
---

<p>Utilities have no content. Refer to the documentation.</p>

<style>
    /* Alignment */

    .a-center { text-align: center; }
    .a-left   { text-align: left; }
    .a-right  { text-align: right; }

    .va-middle { vertical-align: middle !important; }
    .va-top    { vertical-align: top !important; }

    /* Border */

    .b-0 { border: 0 !important; }

    .b-t-0 { border-top:    0 !important; }
    .b-r-0 { border-right:  0 !important; }
    .b-b-0 { border-bottom: 0 !important; }
    .b-l-0 { border-left:   0 !important; }

    /* Display */

    .hide,
    .no-display {
        display: none !important;
    }

    @media print {
        /*
        // Hide only for print (but show for web).
        // Intended only for this dual purpose.
        // Use "hide" otherwise.
        */
        .hide-print { display: none !important; }
    }

    @media only screen {
        /*
        // Hide only for web (but show for print).
        // Intended only for this dual purpose.
        // Use "hide" otherwise.
        */
        .hide-web { display: none !important; }
    }

    /* Margin */

    .m-0 { margin: 0 !important; }

    .m-t-0 { margin-top: 0 !important; }
    .m-t-1 { margin-top: ($margin-bottom * 1) !important; }
    .m-t-2 { margin-top: ($margin-bottom * 2) !important; }
    .m-t-3 { margin-top: ($margin-bottom * 3) !important; }
    .m-t-4 { margin-top: ($margin-bottom * 4) !important; }

    .m-b-0 { margin-bottom: 0 !important; }
    .m-b-1 { margin-bottom: ($margin-bottom * 1) !important; }
    .m-b-2 { margin-bottom: ($margin-bottom * 2) !important; }
    .m-b-3 { margin-bottom: ($margin-bottom * 3) !important; }
    .m-b-4 { margin-bottom: ($margin-bottom * 4) !important; }

    .m-rl-auto {
        margin-right: auto !important;
        margin-left: auto !important;
    }

    /* Padding */

    .p-0 { padding: 0 !important; }

    .p-t-0 { padding-top: 0 !important; }
    .p-t-1 { padding-top: ($margin-bottom * 1) !important; }
    .p-t-2 { padding-top: ($margin-bottom * 2) !important; }
    .p-t-3 { padding-top: ($margin-bottom * 3) !important; }
    .p-t-4 { padding-top: ($margin-bottom * 4) !important; }

    .p-r-0 { padding-right: 0 !important; }
    .p-r-1 { padding-right: ($margin-bottom * 1) !important; }
    .p-r-2 { padding-right: ($margin-bottom * 2) !important; }
    .p-r-3 { padding-right: ($margin-bottom * 3) !important; }
    .p-r-4 { padding-right: ($margin-bottom * 4) !important; }

    .p-b-0 { padding-bottom: 0 !important; }
    .p-b-1 { padding-bottom: ($margin-bottom * 1) !important; }
    .p-b-2 { padding-bottom: ($margin-bottom * 2) !important; }
    .p-b-3 { padding-bottom: ($margin-bottom * 3) !important; }
    .p-b-4 { padding-bottom: ($margin-bottom * 4) !important; }

    .p-l-0 { padding-left: 0 !important; }
    .p-l-1 { padding-left: ($margin-bottom * 1) !important; }
    .p-l-2 { padding-left: ($margin-bottom * 2) !important; }
    .p-l-3 { padding-left: ($margin-bottom * 3) !important; }
    .p-l-4 { padding-left: ($margin-bottom * 4) !important; }

    /* Text Color */

    .text--subtle { color: $c-subtle !important; }

    /* Text Size */

    .text--s   { font-size: $f-size-s !important; }
    .text--xs  { font-size: $f-size-xs !important; }
    .text--xxs { font-size: $f-size-xxs !important; }

    /* White Space */

    .nobr,
    .nowrap {
        white-space: nowrap !important;
    }

    /* Width */

    .width-auto { width: auto !important; }
    .width-full { width: 100% !important; }
</style>
