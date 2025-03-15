import { type TypeGuard } from '@vanyamate/types-kit';
export type DomainUrl = {
    id: string;
    originalUrl: string;
    expiresAt: number;
    createdAt: number;
};
export declare const isDomainUrl: TypeGuard<DomainUrl>;
