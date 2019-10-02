import {DashboardPage} from '../pages/DashboardPage';
import {HeroesPage} from '../pages/HeroesPage';
import {HeroDetailsPage} from '../pages/HeroDetailsPage';

describe('Navigation tests', () => {
  let dashboardPage: DashboardPage;
  let heroesPage: HeroesPage;
  let heroDetailsPage: HeroDetailsPage;

  beforeEach(async () => {
    dashboardPage = new DashboardPage();
    await dashboardPage.navigateTo();
  });

  it('should navigate to hero detail page', async () => {
    heroDetailsPage = await dashboardPage.navigateToHeroDetailByIndex(0);
    expect(await heroDetailsPage.getHeaderText()).toContain('details');
  });

  it('should navigate to heroes page', async () => {
    heroesPage = await dashboardPage.getNavigationBlock().navigateToHeroesPage();
    expect(heroesPage.getHeaderText()).toBe('My Heroes');
  });

  it('should navigate to dashboard page', async () => {
    heroesPage = await dashboardPage.getNavigationBlock().navigateToHeroesPage();
    dashboardPage = await heroesPage.getNavigationBlock().navigateToDashboardPage();
    expect(dashboardPage.getHeaderText()).toBe('Top Heroes');
  });
});
