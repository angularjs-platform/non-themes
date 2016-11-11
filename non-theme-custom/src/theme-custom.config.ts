export class ThemeCustomConfig {
    constructor(private $mdIconProvider: ng.material.IIconProvider,
                    private $mdThemingProvider: ng.material.IThemingProvider) {
        'ngInject';
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdIconProvider.defaultIconSet('./icons/mdi.svg');

        // Define the primary palette hues(colors)
        $mdThemingProvider.definePalette('primary-custom-theme-palette', {
            '50': 'E0F2F1',
            '100': 'B2DFDB',
            '200': '80CBC4',
            '300': '4DB6AC',
            '400': '26A69A',
            '500': '009688',
            '600': '00897B',
            '700': '00796B',
            '800': '00695C',
            '900': '004D40',
            'A100': 'A7FFEB',
            'A200': '64FFDA',
            'A400': '1DE9B6',
            'A700': '00BFA5',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', 'A100'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        // Define the accent palette hues(colors)
        $mdThemingProvider.definePalette('accent-custom-theme-palette', {
            '50': 'FFF8E1',
            '100': 'FFECB3',
            '200': 'FFE082',
            '300': 'FFD54F',
            '400': 'FFCA28',
            '500': 'FFC107',
            '600': 'FFB300',
            '700': 'FFA000',
            '800': 'FF8F00',
            '900': 'FF6F00',
            'A100': 'FFE57F',
            'A200': 'FFD740',
            'A400': 'FFC400',
            'A700': 'FFAB00',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('custom')
            .primaryPalette('primary-custom-theme-palette', {
                'default': '400', // by default use shade 500 from the primary-base-theme-palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '300', // use shade 300 for the <code>md-hue-2</code> class
                'hue-3': '700' // use shade 700 for the <code>md-hue-3</code> class
            })
            .accentPalette('accent-custom-theme-palette', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '300',
                'hue-3': '700'
            });
    }
}
