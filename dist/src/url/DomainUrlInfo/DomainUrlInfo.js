import { isObject, isString, isNumber, } from '@vanyamate/types-kit';
export const isDomainUrlInfo = function (data) {
    return (isObject(data) &&
        isString(data['originalUrl']) &&
        isNumber(data['createdAt']) &&
        isNumber(data['clickCount']));
};
