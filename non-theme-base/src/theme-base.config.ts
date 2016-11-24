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
            '50': 'ECEFF1',
            '100': 'CFD8DC',
            '200': 'B0BEC5',
            '300': '90A4AE',
            '400': '78909C',
            '500': '607D8B',
            '600': '546E7A',
            '700': '455A64',
            '800': '37474F',
            '900': '263238',
            'A100': 'CFD8DC',
            'A200': 'B0BEC5',
            'A400': '90A4AE',
            'A700': '78909C',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', 'A100'], // hues for which contrast (text color) should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('base')
            .primaryPalette('primary-base-theme-palette', {
                'default': '600',
                'hue-1': '100',
                'hue-2': '400',
                'hue-3': '800'
            })
            .accentPalette('accent-base-theme-palette', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '300',
                'hue-3': '700'
            });
    }
}
