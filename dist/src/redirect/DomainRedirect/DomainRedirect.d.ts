import { type TypeGuard } from '@vanyamate/types-kit';
export type DomainRedirect = {
    ip: string;
    redirectTime: number;
};
export declare const isDomainRedirect: TypeGuard<DomainRedirect>;
