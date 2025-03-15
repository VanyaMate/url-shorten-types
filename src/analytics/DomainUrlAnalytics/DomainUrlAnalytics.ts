import {
    type TypeGuard,
    isObject,
    isNumber,
    isArray,
} from '@vanyamate/types-kit';
import { DomainRedirect, isDomainRedirect } from '../../redirect';


export type DomainUrlAnalytics = {
    count: number;
    lastRedirects: Array<DomainRedirect>;
}

export const isDomainUrlAnalytics: TypeGuard<DomainUrlAnalytics> = function (data): data is DomainUrlAnalytics {
    return (
        isObject(data) &&
        isNumber(data['count']) &&
        isArray(data['lastRedirects'], isDomainRedirect)
    );
};