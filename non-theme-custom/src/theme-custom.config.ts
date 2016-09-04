export class ThemeCustomConfig {
    constructor(private $mdIconProvider: ng.material.IIconProvider,
                    private $mdThemingProvider: ng.material.IThemingProvider) {
        'ngInject';

        $mdThemingProvider.theme('custom')
            .primaryPalette('deep-orange')
            .accentPalette('pink');
    }
}
