export class ThemeBaseConfig {
    constructor(private $mdIconProvider: ng.material.IIconProvider,
                    private $mdThemingProvider: ng.material.IThemingProvider) {
        'ngInject';
        $mdIconProvider.defaultIconSet('./icons/mdi.svg');

        $mdThemingProvider.theme('base')
             .primaryPalette('blue')
            .accentPalette('pink');

        $mdThemingProvider.setDefaultTheme('base');
    }
}
