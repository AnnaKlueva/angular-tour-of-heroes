import {DashboardPage} from '../pages/DashboardPage';
import {HeroDetailsPage} from '../pages/HeroDetailsPage';

describe('Heroes page tests', () => {
  let dashboardPage: DashboardPage;
  let heroDetailsPage: HeroDetailsPage;

  beforeEach(async () => {
    dashboardPage = new DashboardPage();
    await dashboardPage.navigateTo();
  });

  it('should be able to change name of hero', async () => {
    heroDetailsPage = await dashboardPage.navigateToHeroDetailByIndex(0);
    await heroDetailsPage.enterName('Anna');
    dashboardPage = await heroDetailsPage.clickSave();
    heroDetailsPage = await dashboardPage.navigateToHeroDetailByIndex(0);
    expect(heroDetailsPage.getHeaderText()).toContain('Anna');
  });

  it('should be able to reject changes of hero name', async() => {
    heroDetailsPage = await dashboardPage.navigateToHeroDetailByIndex(0);
    const name = await heroDetailsPage.getHeroName();
    await heroDetailsPage.enterName('Anna');
    dashboardPage = await heroDetailsPage.clickBackButton();
    heroDetailsPage = await dashboardPage.navigateToHeroDetailByIndex(0);
    expect(await heroDetailsPage.getHeaderText()).toContain(name);
  });
});
