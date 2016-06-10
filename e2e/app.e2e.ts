import { NgrxRouterCliSamplePage } from './app.po';

describe('ngrx-router-cli-sample App', function() {
  let page: NgrxRouterCliSamplePage;

  beforeEach(() => {
    page = new NgrxRouterCliSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngrx-router-cli-sample works!');
  });
});
