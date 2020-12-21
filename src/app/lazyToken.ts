import { InjectionToken } from '@angular/core';

export const LAZY_TOKENS = new InjectionToken<{ [key: string]: string }>('LAZY_TOKENS');