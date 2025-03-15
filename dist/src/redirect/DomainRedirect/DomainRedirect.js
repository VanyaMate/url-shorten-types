import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainRedirect = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isString(data['ip']) &&
        isNumber(data['redirectTime']));
};
