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
            '50': 'E1F5FE',
            '100': 'B3E5FC',
            '200': '81D4FA',
            '300': '4FC3F7',
            '400': '29B6F6',
            '500': '03A9F4',
            '600': '039BE5',
            '700': '0288D1',
            '800': '0277BD',
            '900': '01579B',
            'A100': '80D8FF',
            'A200': '40C4FF',
            'A400': '00B0FF',
            'A700': '0091EA',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', '200', 'A100', 'A200'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('custom')
            .primaryPalette('primary-custom-theme-palette', {
                'default': '600',
                'hue-1': '100',
                'hue-2': '400',
                'hue-3': '800'
            })
            .accentPalette('accent-custom-theme-palette', {
                'default': '600',
                'hue-1': '100',
                'hue-2': '300',
                'hue-3': '700'
            });
    }
}
