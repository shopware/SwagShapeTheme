import NavigationMenuPlugin from './plugin/main-menu/navigation-menu.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('ShapeNavigationMenu', NavigationMenuPlugin, '[data-navigation-menu]');
