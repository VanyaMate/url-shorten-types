import { type TypeGuard } from '@vanyamate/types-kit';
import { DomainRedirect } from '../../redirect';
export type DomainUrlAnalytics = {
    count: number;
    lastRedirects: Array<DomainRedirect>;
};
export declare const isDomainUrlAnalytics: TypeGuard<DomainUrlAnalytics>;
