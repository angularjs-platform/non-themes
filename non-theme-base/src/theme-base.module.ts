const moduleName: string = 'non.theme-base';

import {IconConfig} from './base.icon.config';

// Google Material Design Icons used from https://materialdesignicons.com/
import './icons/mdi.svg';

angular.module(moduleName, [])
    .config(IconConfig);

export default moduleName;
