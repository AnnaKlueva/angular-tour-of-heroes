import {HeroesPage} from '../pages/HeroesPage';
import {forEach} from '@angular/router/src/utils/collection';

describe('Heroes page tests', () => {
  let page: HeroesPage;

  beforeEach(async () => {
    page = new HeroesPage();
    await page.navigateTo();
  });

  it('should be able to add hero', async () => {
    await page.addHero('Anna');
    expect(page.getLastHeroName()).toContain('Anna');
  });

  it('should be able to delete hero', async () => {
    await page.addHero('Anna');
    expect(page.getLastHeroName()).toContain('Anna');
    await page.deleteLastHero();
    expect(page.getLastHeroName()).not.toContain('Anna');
  });

  it('should be able to reject hero creation by tap on "Back" button', async () => {
    await page.clickAddHeroButton();
    await page.enterName('Anna');
    await page.clickBackButton();
    expect(page.getLastHeroName()).not.toContain('Anna');
  });

  it('should create several heroes', async () => {
    const heroNames: string[] = ['Anna', 'Batman', 'Packman'];
    for (const heroName of heroNames) {
      await page.addHero(heroName);
    }
    for (const heroName of heroNames) {
      expect(await page.findHeroByName(heroName)).toBe(true);
    }

  })
});
