export class NgrxRouterCliSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngrx-router-cli-sample-app h1')).getText();
  }
}
