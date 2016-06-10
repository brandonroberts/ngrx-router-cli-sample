import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgrxRouterCliSampleAppComponent } from '../app/ngrx-router-cli-sample.component';

beforeEachProviders(() => [NgrxRouterCliSampleAppComponent]);

describe('App: NgrxRouterCliSample', () => {
  it('should create the app',
      inject([NgrxRouterCliSampleAppComponent], (app: NgrxRouterCliSampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngrx-router-cli-sample works!\'',
      inject([NgrxRouterCliSampleAppComponent], (app: NgrxRouterCliSampleAppComponent) => {
    expect(app.title).toEqual('ngrx-router-cli-sample works!');
  }));
});
