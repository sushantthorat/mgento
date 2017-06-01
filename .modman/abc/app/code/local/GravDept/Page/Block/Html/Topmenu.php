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


// ==============================================
// GravDept:
// Custom category nav menu.
//
// Some of the methods being extended are deprecated.
// See: Mage_Page_Block_Html_Topmenu
//
// Only the "rwd/default" package implements the new methods.
// See: Mage_Page_Block_Html_Topmenu_Renderer
//
// GravDept uses the old methods for more continuity with the "base/default" package.
// ==============================================

class GravDept_Page_Block_Html_Topmenu extends Mage_Page_Block_Html_Topmenu
{
    /**
     * GravDept:
     * New method.
     * Get catalog HTML for showing full hierarchy.
     * Forked from: getHtml()
     *
     * @param string $outermostClass
     * @param string $childrenWrapClass
     * @return string
     */
    public function getGravDeptCatalogHtml($outermostClass = '', $childrenWrapClass = '')
    {
        Mage::dispatchEvent('page_block_html_topmenu_gethtml_before', array(
            'menu' => $this->_menu,
            'block' => $this
        ));

        $this->_menu->setOutermostClass($outermostClass);
        $this->_menu->setChildrenWrapClass($childrenWrapClass);

        // GravDept:
        // Get the catalog response instead.
        $html = $this->_getGravDeptCatalogHtml($this->_menu, $childrenWrapClass);

        Mage::dispatchEvent('page_block_html_topmenu_gethtml_after', array(
            'menu' => $this->_menu,
            'html' => $html
        ));

        return $html;
    }

    /**
     * GravDept:
     * New method.
     * Recursively generates catalog html from data that is specified in $menuTree
     * Forked from: _getHtml()
     *
     * @param Varien_Data_Tree_Node $menuTree
     * @param string $childrenWrapClass
     * @return string
     */
    protected function _getGravDeptCatalogHtml(Varien_Data_Tree_Node $menuTree, $childrenWrapClass)
    {
        $html = '';

        $children = $menuTree->getChildren();
        $parentLevel = $menuTree->getLevel();
        $childLevel = is_null($parentLevel) ? 0 : $parentLevel + 1;

        $counter = 1;
        $childrenCount = $children->count();

        $parentPositionClass = $menuTree->getPositionClass();
        $itemPositionClassPrefix = $parentPositionClass ? $parentPositionClass . '-' : 'nav-';

        foreach ($children as $child) {
            $child->setLevel($childLevel);
            $child->setIsFirst($counter == 1);
            $child->setIsLast($counter == $childrenCount);
            $child->setPositionClass($itemPositionClassPrefix . $counter);

            // Magento:
            // Only add the class for first level.
            /*
            $outermostClassCode = '';
            $outermostClass = $menuTree->getOutermostClass();

            if ($childLevel == 0 && $outermostClass) {
                $outermostClassCode = ' class="' . $outermostClass . '" ';
                $child->setClass($outermostClass);
            }
            */

            // GravDept:
            // Always add the level# class to category links.
            $outermostClassCode = 'level'. $childLevel;

            $html .= '<li ' . $this->_getRenderedMenuItemAttributes($child) . '>';

            $html .= '<a href="' . $child->getUrl() . '" class="' . $outermostClassCode . '">' . $this->escapeHtml($child->getName()) . '</a>';

            if ($child->hasChildren()) {
                $html .= '<ul class="level' . $childLevel . '">';

                // GravDept:
                // Use this method again.
                $html .= $this->_getGravDeptCatalogHtml($child, $childrenWrapClass);

                $html .= '</ul>';
            }
            $html .= '</li>';

            $counter++;
        }

        return $html;
    }

    /**
     * GravDept:
     * Custom method forked from: getHtml()
     * Get nav HTML for top menu.
     *
     * @param string $outermostClass
     * @param string $childrenWrapClass
     * @return string
     */
    public function getGravDeptNavHtml($outermostClass = '', $childrenWrapClass = '')
    {
        Mage::dispatchEvent('page_block_html_topmenu_gethtml_before', array(
            'menu' => $this->_menu,
            'block' => $this
        ));

        $this->_menu->setOutermostClass($outermostClass);
        $this->_menu->setChildrenWrapClass($childrenWrapClass);

        // GravDept:
        // Use the customized method.
        $html = $this->_getGravDeptNavHtml($this->_menu, $childrenWrapClass);

        Mage::dispatchEvent('page_block_html_topmenu_gethtml_after', array(
            'menu' => $this->_menu,
            'html' => $html
        ));

        return $html;
    }

    /**
     * GravDept:
     * Custom method forked from: _getHtml()
     * Recursively generates top menu HTML from data that is specified in $menuTree
     *
     * @param Varien_Data_Tree_Node $menuTree
     * @param string $childrenWrapClass
     * @return string
     */
    protected function _getGravDeptNavHtml(Varien_Data_Tree_Node $menuTree, $childrenWrapClass)
    {
        $html = '';

        $children = $menuTree->getChildren();
        $parentLevel = $menuTree->getLevel();
        $childLevel = is_null($parentLevel) ? 0 : $parentLevel + 1;

        $counter = 1;
        $childrenCount = $children->count();

        $parentPositionClass = $menuTree->getPositionClass();
        $itemPositionClassPrefix = $parentPositionClass ? $parentPositionClass . '-' : 'nav-';

        foreach ($children as $child) {
            $child->setLevel($childLevel);
            $child->setIsFirst($counter == 1);
            $child->setIsLast($counter == $childrenCount);
            $child->setPositionClass($itemPositionClassPrefix . $counter);

            // GravDept:
            // Add "nav-item" class to level0 only.
            // See: _getMenuItemClasses()
            if ($childLevel == 0) {
                $child->setClass('nav-item');
            }

            // GravDept:
            // Render only level 0 and 1.
            if ($childLevel > 1) {
                continue;
            }

            // Magento:
            // Only add the class for first level.
            // Overridden by GravDept below.
            /*
            $outermostClassCode = '';
            $outermostClass = $menuTree->getOutermostClass();

            if ($childLevel == 0 && $outermostClass) {
                $outermostClassCode = ' class="' . $outermostClass . '" ';
                $child->setClass($outermostClass);
            }
            */

            // GravDept:
            // Always add the "level#" class to links.
            $outermostClassCode = 'level' . $childLevel;

            $html .= '<li ' . $this->_getRenderedMenuItemAttributes($child) . '>';

            // GravDept:
            // Only for "level0" categories.
            if ($childLevel == 0) {
                // Add <br> for flexbox requirements on multi-line text.
                $name = $this->_navBreakdance($this->escapeHtml($child->getName()));

                $hasMenu = '';

                // Add modifier class if item has menu.
                if ($child->hasChildren()) {
                    $hasMenu = 'nav-link--menu';
                }

                // Add classes.
                // Add "data-ui-action" attribute.
                // Add <span> liner.
                //
                // Note: the "data-ui-action" cannot contain a regex match like "nav-#".
                // See: http://magento.stackexchange.com/questions/57772/the-curious-case-of-the-phantom-navigation-decorator-striking-magentos-ee-cache
                $html .= '<a class="nav-link ' . $hasMenu . ' ' . $outermostClassCode . '" data-ui-action="cat-' . $counter . '" href="' . $child->getUrl() . '">';
                $html .= '<span>' . $name . '</span>';
                $html .= '</a>';
            } else {
                // Render basic link.
                $html .= '<a href="' . $child->getUrl() . '" class="' . $outermostClassCode . '">' . $this->escapeHtml($child->getName()) . '</a>';
            }

            // GravDept:
            // Render sub-categories of level0 only.
            if ($child->hasChildren() && $childLevel == 0) {
                // Add "menu--right-origin" class for the 7th level0 item onward.
                if ($counter >= 7) {
                    $menuRightOriginClass = 'menu--right-origin';
                } else {
                    $menuRightOriginClass = '';
                }

                $html .= '<div class="menu ' . $menuRightOriginClass . '">';
                $html .= '<ul class="menu-list level' . $childLevel . '">';

                // GravDept:
                // Add "View All" link.
                $html .= '<li><a class="view-all" href="' . $child->getUrl() . '">' . $this->__('View All') . ' ' . $this->escapeHtml($child->getName()) . '</a></li>';

                // GravDept:
                // Run this method again (inception loop).
                $html .= $this->_getGravDeptNavHtml($child, $childrenWrapClass);

                $html .= '</ul>';
                $html .= '</div>';
            }

            $html .= '</li>';

            $counter++;
        }

        return $html;
    }

    /**
     * GravDept:
     * Replace the first 'space' character after the 10th char with '<br> '.
     * See: http://stackoverflow.com/a/15737449/1497746
     *
     * @param string $haystack
     * @return string
     */
    protected function _navBreakdance ($haystack) {
        $needle = ' ';
        $lastPos = 0;
        $positions = array();

        while (($lastPos = strpos($haystack, $needle, $lastPos))!== false) {
            $positions[] = $lastPos;
            $lastPos = $lastPos + strlen($needle);
        }

        foreach ($positions as $value) {
            if ($value > 9) {
                $haystack = substr_replace($haystack, '<br> ', $value, 1);
                break;
            }
        }

        return $haystack;
    }
}
