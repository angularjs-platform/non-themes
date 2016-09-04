const moduleName: string = 'non.theme-base';

import {ThemeBaseConfig} from './theme-base.config';

// Google Material Design Icons used from https://materialdesignicons.com/
import './assets/icons/mdi.svg';

angular.module(moduleName, [])
    .config(ThemeBaseConfig);

export default moduleName;
