import { ScubaAppPage } from './app.po';

describe('scuba-app App', function() {
  let page: ScubaAppPage;

  beforeEach(() => {
    page = new ScubaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
