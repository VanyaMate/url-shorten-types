import {
    type TypeGuard,
    type TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainUrlInfo = {
    originalUrl: string;
    createdAt: number;
    clickCount: number;
}

export const isDomainUrlInfo: TypeGuard<DomainUrlInfo> = function (data): data is DomainUrlInfo {
    return (
        isObject(data) &&
        isString(data['originalUrl']) &&
        isNumber(data['createdAt']) &&
        isNumber(data['clickCount'])
    );
};