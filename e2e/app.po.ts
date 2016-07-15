export class RecipePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rp-root h1')).getText();
  }
}
