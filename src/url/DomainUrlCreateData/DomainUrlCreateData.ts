import {
    type TypeGuard,
    isObject,
    isString,
    isOptional,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainUrlCreateData = {
    originalUrl: string;
    alias?: string;
    expiresAt?: number;
}

export const isDomainUrlCreateData: TypeGuard<DomainUrlCreateData> = function (data): data is DomainUrlCreateData {
    return (
        isObject(data) &&
        isString(data['originalUrl']) &&
        isOptional(data['alias'], isString) &&
        isOptional(data['expiresAt'], isNumber)
    );
};