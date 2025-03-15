import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainUrl = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isString(data['originalUrl']) &&
        isNumber(data['expiresAt']) &&
        isNumber(data['createdAt']));
};
