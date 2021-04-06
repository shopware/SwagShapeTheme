import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class NavigationMenu extends Plugin {

    static options = {
        /**
         * selector for the desktop navigation item
         */
        mainNavigationLink: '.main-navigation-link',
    };

    init() {
        this._registerEventListeners();
        this._hideNavigationMenuItem();
    }

    /**
     * Register events to handle hide navigation item
     * when viewport change
     * @private
     */
    _registerEventListeners() {
        document.addEventListener('Viewport/isLG', this._hideNavigationMenuItem.bind(this));
    }

    _hideNavigationMenuItem() {
        const searchPosition = this.el.getBoundingClientRect().x;

        Array.from(document.querySelectorAll(this.options.mainNavigationLink)).forEach(mainNavigationItem => {
            $(mainNavigationItem).removeClass("d-none");
            if (mainNavigationItem.getBoundingClientRect().left > searchPosition) {
                $(mainNavigationItem).addClass("d-none");
            }
        });
    }
}
