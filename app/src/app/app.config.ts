import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { StylesLibService } from 'styles-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: APP_INITIALIZER,
      deps: [StylesLibService],
      multi: true,
      useFactory: (stylesLibService: StylesLibService) => () => {
        return stylesLibService.ensureStyles();
      },
    },
  ],
};
