import { MdlNarwhalPage } from './app.po';

describe('mdl-narwhal App', function() {
  let page: MdlNarwhalPage;

  beforeEach(() => {
    page = new MdlNarwhalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
