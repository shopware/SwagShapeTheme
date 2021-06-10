import NavigationMenuPlugin from './plugin/main-menu/navigation-menu.plugin';
import FlyoutMenuPlugin from './plugin/main-menu/flyout-menu.plugin';
import ShapeGallerySliderPlugin from './plugin/slider/gallery-slider.plugin';
import ShapeListingPlugin from './plugin/listing/listing.plugin';
import ShapeDatePickerPlugin from "./plugin/date-picker/date-picker.plugin";
import CustomizedProductsStepByStepWizard from "./plugin/customized-product/customized-product-step.plugin";
import CustomizedProductToggle from "./plugin/customized-product/customized-product-toggle.plugin";

const PluginManager = window.PluginManager;

PluginManager.deregister('FlyoutMenu', '[data-flyout-menu]');
PluginManager.register('ShapeNavigationMenu', NavigationMenuPlugin, '[data-navigation-menu]');
PluginManager.register('ShapeFlyoutMenu', FlyoutMenuPlugin, '[data-navigation-link]');
PluginManager.register('ShapeCustomizedProductsToggle', CustomizedProductToggle, '*[data-customized-products-toggle="true"]');

PluginManager.override('Listing', ShapeListingPlugin, '[data-listing]');
PluginManager.override('GallerySlider', ShapeGallerySliderPlugin, '[data-gallery-slider]');
PluginManager.override('SwagCustomizedProductsStepByStepWizard', CustomizedProductsStepByStepWizard, '*[data-swag-customized-product-step-by-step="true"]');
PluginManager.override('DatePicker', ShapeDatePickerPlugin, '[data-date-picker]');