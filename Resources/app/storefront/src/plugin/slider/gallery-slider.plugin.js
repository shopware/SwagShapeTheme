import GallerySliderPlugin from 'src/plugin/slider/gallery-slider.plugin';
import ViewportDetection from 'src/helper/viewport-detection.helper';
import SliderSettingsHelper from 'src/plugin/slider/helper/slider-settings.helper';

export default class ShapeGallerySliderPlugin extends GallerySliderPlugin {

    init() {
        this._slider = false;
        this._thumbnailSlider = false;

        if (!this.el.classList.contains(this.options.initializedCls)) {
            this.options.slider = SliderSettingsHelper.prepareBreakpointPxValues(this.options.slider);
            this.options.thumbnailSlider = SliderSettingsHelper.prepareBreakpointPxValues(this.options.thumbnailSlider);
            this._correctIndexSettings();

            document.addEventListener('readystatechange', this._initOnReady.bind(this), false);
        }
    }

    _initOnReady(event) {
        if (event.target.readyState === 'complete') {
            this._getSettings(ViewportDetection.getCurrentViewport());
            this._initSlider();
            this._registerEvents();
        }
    }

    /**
     * sets the active dot depending on the slider index
     *
     * @private
     */
    _setActiveDot() {
        super._setActiveDot();

        const currentIndex = this.getCurrentSliderIndex();

        let currentDot = this._dots[currentIndex];

        if (currentDot)
        {
            currentDot.closest(".base-slider").querySelector(".js-dots-text-current").innerHTML = currentIndex + 1;
        }
    }
}
