import { InjectionToken } from "@angular/core";
import { flush } from '@angular/core/testing';

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	availableLanguages: Array<{ code: string, name: string }>;
	showBuyPromt: boolean;
}

export const BaseAppConfig: AppConfig = {
	availableLanguages: [{
		code: 'en',
		name: 'English'
	}, {
		code: 'ar',
		name: 'Arabic'
	}, {
		code: 'es',
		name: 'Spanish'
	}, {
		code: 'fr',
		name: 'French'
	}, {
		code: 'id',
		name: 'Indonesian'
	}, {
		code: 'pt',
		name: 'Portuguese'
	}],
	showBuyPromt: false
};