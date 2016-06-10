import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgrxRouterCliSampleAppComponent, environment } from './app/';
import { provideRouter } from '@ngrx/router';
import { routes } from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxRouterCliSampleAppComponent, [
  provideRouter(routes)
]);
