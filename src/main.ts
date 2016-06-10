import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgrxRouterCliSampleAppComponent, environment, routes } from './app/';
import { provideRouter } from '@ngrx/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxRouterCliSampleAppComponent, [
  provideRouter(routes)
]);
