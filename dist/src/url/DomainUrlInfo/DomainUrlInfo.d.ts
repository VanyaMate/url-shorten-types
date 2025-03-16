import { type TypeGuard } from '@vanyamate/types-kit';
export type DomainUrlInfo = {
    originalUrl: string;
    createdAt: number;
    clickCount: number;
};
export declare const isDomainUrlInfo: TypeGuard<DomainUrlInfo>;
