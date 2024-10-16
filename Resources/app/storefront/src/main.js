const PluginManager = window.PluginManager;

PluginManager.register('ShapeNavigationMenu', () => import('./plugin/main-menu/navigation-menu.plugin'), '[data-navigation-menu]');
PluginManager.register('ShapeFlyoutMenu', () => import('./plugin/main-menu/shape-flyout-menu.plugin'), '[data-navigation-link]');
PluginManager.register('ShapeCustomizedProductsToggle', () => import('./plugin/customized-product/customized-product-toggle.plugin'), '*[data-customized-products-toggle="true"]');
PluginManager.register('ShapeProductBox', () => import('./plugin/product-box/product-box.plugin'), '[data-product-box]');

PluginManager.override('Listing', () => import('./plugin/listing/listing.plugin'), '[data-listing]');
PluginManager.override('GallerySlider', () => import('./plugin/slider/shape-gallery-slider.plugin'), '[data-gallery-slider]');
PluginManager.override('DatePicker', () => import('./plugin/date-picker/shape-date-picker.plugin'), '[data-date-picker]');

if (PluginManager.getPluginList().SwagCustomizedProductsStepByStepWizard) {
    PluginManager.override('SwagCustomizedProductsStepByStepWizard', () => import('./plugin/customized-product/customized-product-step.plugin'), '*[data-swag-customized-product-step-by-step="true"]');
}

