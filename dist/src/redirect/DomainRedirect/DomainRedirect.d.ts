import { type TypeGuard } from '@vanyamate/types-kit';
export type DomainRedirect = {
    id: string;
    ip: string;
    redirectTime: number;
};
export declare const isDomainRedirect: TypeGuard<DomainRedirect>;
