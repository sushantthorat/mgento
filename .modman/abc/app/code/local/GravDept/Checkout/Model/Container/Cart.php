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

/**
 * Cart sidebar container
 */
class GravDept_Checkout_Model_Container_Cart extends Enterprise_PageCache_Model_Container_Advanced_Quote
{

    public function applyWithoutApp(&$content)
    {
        return false;
    }

    /**
     * Render block content
     *
     * @return string
     */
    protected function _renderBlock()
    {
        $block = $this->_getPlaceHolderBlock();
        return $block->toHtml();
    }

}
