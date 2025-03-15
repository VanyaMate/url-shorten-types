import { type TypeGuard } from '@vanyamate/types-kit';
export type DomainUrlCreateData = {
    originalUrl: string;
    alias?: string;
    expiresAt?: number;
};
export declare const isDomainUrlCreateData: TypeGuard<DomainUrlCreateData>;
