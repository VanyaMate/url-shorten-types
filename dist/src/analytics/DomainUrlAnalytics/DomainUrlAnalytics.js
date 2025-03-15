import { isObject, isNumber, isArray, } from '@vanyamate/types-kit';
import { isDomainRedirect } from '../../redirect';
export const isDomainUrlAnalytics = function (data) {
    return (isObject(data) &&
        isNumber(data['count']) &&
        isArray(data['lastRedirects'], isDomainRedirect));
};
