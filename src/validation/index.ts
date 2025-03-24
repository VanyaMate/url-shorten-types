import { isString } from '@vanyamate/types-kit';

export namespace Validation {
	export type Validator = (value: unknown): string | true;
	
	export const ERROR_ORIGINAL_URL_TYPE = 'ERROR_ORIGINAL_URL_TYPE';
	export const ERROR_ORIGINAL_URL_REGEXP = 'ERROR_ORIGINAL_URL_REGEXP';
	
	export const originalUrl: Validator = function (url: unknown) {
		if (!isString(url)) {
			throw new Error(ERROR_ORIGINAL_URL_TYPE);
		}
		
		if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url)) {
			return true;
		}
		
		throw new Error(ERROR_ORIGINAL_URL_REGEXP);
	}
	
	export const ERROR_ALIAS_TYPE = 'ERROR_ALIAS_TYPE';
	export const ERROR_ALIAS_LENGTH = 'ERROR_ALIAS_LENGTH';
	export const ERROR_ALIAS_REGEXP = 'ERROR_ALIAS_REGEXP';
	
	export const alias: Validator = function (alias: unknown) {
		if (!isString(alias)) {
			throw new Error(ERROR_ALIAS_TYPE);
		}
		
		if (alias.length > 20) {
			throw new Error(ERROR_ALIAS_LENGTH);
		}
		
		if (/[^a-z0-9_-]/.test(alias)) {
			throw new Error(ERROR_ALIAS_REGEXP);
		}
		
		return true;
	}
}