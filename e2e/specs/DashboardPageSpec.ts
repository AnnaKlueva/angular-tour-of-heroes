import {DashboardPage} from '../pages/DashboardPage';
import {HeroesPage} from '../pages/HeroesPage';

describe('Dashboard page tests', () => {
  let page: DashboardPage;
  let heroesPage: HeroesPage;

  beforeEach(async() => {
    page = new DashboardPage();
    heroesPage = new HeroesPage();
    await page.navigateTo();
  });

  it('should navigate to hero detail page', () => {
    expect(page.navigateToHeroDetailByIndex(0)).toEqual('Narco');
  });

  it('should search existing hero', async() => {
    await page.searchFor('Narco');
    expect( page.selectSearchResultByIndex(0)).toBe('Narco');
  });

  it('should displayed 4 heroes in "Top hero" section', () => {
   // heroesPage.findHeroByIndex(1).deleteHero();

  });
});
