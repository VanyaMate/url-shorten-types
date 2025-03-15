import {
    type TypeGuard,
    isObject,
    isString,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainRedirect = {
    id: string;
    ip: string;
    redirectTime: number;
}

export const isDomainRedirect: TypeGuard<DomainRedirect> = function (data): data is DomainRedirect {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['ip']) &&
        isNumber(data['redirectTime'])
    );
};