export class IconConfig {
    constructor(private $mdIconProvider: any) {
        'ngInject';
        $mdIconProvider.defaultIconSet('./icons/mdi.svg');
    }
}
