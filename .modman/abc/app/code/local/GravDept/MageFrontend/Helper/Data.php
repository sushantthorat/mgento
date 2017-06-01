<?php
/**
* Acumen - Magento Theme
* http://gravitydept.com/to/acumen
*
* @author     Brendan Falkowski
* @package    gravdept_acumen
* @copyright  2010-2016 Gravity Department. All rights reserved.
* @version    2.0.0
*/

class GravDept_MageFrontend_Helper_Data extends Mage_Core_Helper_Abstract {

    /**
     * @param object $product - Item in Magento product collection
     * @return bool
     */
    public function isNewProduct ($product) {
        $now     = date('Y-m-d');
        $newFrom = substr($product->getNewsFromDate(), 0, 10);
        $newTo   = substr($product->getNewsToDate(), 0, 10);

        if (($now >= $newFrom) && ($now <= $newTo)) {
            return true;
        }

        return false;
    }

    /**
     * @param string $text
     * @return string
     */
    public function preventTypographicWidow ($text) {
        // Prevent typographic widow in product name.
        // See: http://shauninman.com/archive/2006/08/22/widont_wordpress_plugin
        $text = rtrim($text);
        $spacePosition = strrpos($text, ' ');

        if ($spacePosition !== false) {
            // Widow prevented
            return substr($text, 0, $spacePosition) . '&nbsp;' . substr($text, $spacePosition + 1);
        }

        return $text;
    }

}
