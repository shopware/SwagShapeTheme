import NavigationMenuPlugin from './plugin/main-menu/navigation-menu.plugin';
import FlyoutMenuPlugin from './plugin/main-menu/flyout-menu.plugin';

const PluginManager = window.PluginManager;

PluginManager.deregister('FlyoutMenu', '[data-flyout-menu]');
PluginManager.deregister('SearchWidget', '[data-search-form]');
PluginManager.register('ShapeNavigationMenu', NavigationMenuPlugin, '[data-navigation-menu]');
PluginManager.register('ShapeFlyoutMenu', FlyoutMenuPlugin, '[data-navigation-link]');
