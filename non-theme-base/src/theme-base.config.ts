export class ThemeBaseConfig {
    constructor(private $mdIconProvider: ng.material.IIconProvider,
                    private $mdThemingProvider: ng.material.IThemingProvider) {
        'ngInject';
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdIconProvider.defaultIconSet('./icons/mdi.svg');

        // Define the primary palette hues(colors)
        $mdThemingProvider.definePalette('primary-base-theme-palette', {
            '50': 'E0F7FA',
            '100': 'B2EBF2',
            '200': '80DEEA',
            '300': '4DD0E1',
            '400': '26C6DA',
            '500': '00BCD4',
            '600': '00ACC1',
            '700': '0097A7',
            '800': '00838F',
            '900': '006064',
            'A100': '84FFFF',
            'A200': '18FFFF',
            'A400': '00E5FF',
            'A700': '00B8D4',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        // Define the accent palette hues(colors)
        $mdThemingProvider.definePalette('accent-base-theme-palette', {
            '50': 'FCE4EC',
            '100': 'F8BBD0',
            '200': 'F48FB1',
            '300': 'F06292',
            '400': 'EC407A',
            '500': 'E91E63',
            '600': 'D81B60',
            '700': 'C2185B',
            '800': 'AD1457',
            '900': '880E4F',
            'A100': 'FF80AB',
            'A200': 'FF4081',
            'A400': 'F50057',
            'A700': 'C51162',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', 'A100'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('base')
            .primaryPalette('primary-base-theme-palette', {
                'default': '500', // by default use shade 500 from the primary-base-theme-palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '300', // use shade 300 for the <code>md-hue-2</code> class
                'hue-3': '700' // use shade 700 for the <code>md-hue-3</code> class
            })
            .accentPalette('accent-base-theme-palette', {
                'default': '300',
                'hue-1': '100',
                'hue-2': '200',
                'hue-3': '600'
            });
    }
}
