import {DashboardPage} from '../pages/DashboardPage';

describe('Dashboard page tests', () => {
  let dashboardPage: DashboardPage;

  beforeEach(async() => {
    dashboardPage = new DashboardPage();
    await dashboardPage.navigateTo();
  });

  it('should search existing hero', async() => {
    await dashboardPage.searchFor('Narco');
    expect( dashboardPage.selectSearchResultByIndex(0)).toBe('Narco');
  });

  it('should displayed 4 heroes in "Top hero" section', () => {
    expect(dashboardPage.getTopHeroesQuantity()).toBe(4);
  });
});
