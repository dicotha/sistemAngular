import { SistemPage } from './app.po';

describe('sistem App', () => {
  let page: SistemPage;

  beforeEach(() => {
    page = new SistemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
