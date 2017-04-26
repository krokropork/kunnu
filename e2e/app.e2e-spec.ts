import { KunnuPage } from './app.po';

describe('kunnu App', () => {
  let page: KunnuPage;

  beforeEach(() => {
    page = new KunnuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
