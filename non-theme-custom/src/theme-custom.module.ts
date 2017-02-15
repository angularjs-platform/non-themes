import * as angular from 'angular';

const moduleName: string = 'non.theme-custom';

import {ThemeCustomConfig} from './theme-custom.config';

angular.module(moduleName, [])
    .config(ThemeCustomConfig);

export default moduleName;
