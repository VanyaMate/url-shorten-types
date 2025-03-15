import {
    type TypeGuard,
    isObject,
    isString,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainUrl = {
    id: string;
    originalUrl: string;
    expiresAt: number;
    createdAt: number;
}

export const isDomainUrl: TypeGuard<DomainUrl> = function (data): data is DomainUrl {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['originalUrl']) &&
        isNumber(data['expiresAt']) &&
        isNumber(data['createdAt'])
    );
};