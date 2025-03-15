import { isObject, isString, isOptional, isNumber, } from '@vanyamate/types-kit';
export const isDomainUrlCreateData = function (data) {
    return (isObject(data) &&
        isString(data['originalUrl']) &&
        isOptional(data['alias'], isString) &&
        isOptional(data['expiresAt'], isNumber));
};
