import {HeroesPage} from '../pages/HeroesPage';

describe('Heroes page tests', () => {
  let page: HeroesPage;

  beforeEach(async () => {
    page = new HeroesPage();
    await page.navigateTo();
  });

  it('should be able to delete hero', async () => {
    const uniqueName = 'Anna'+ Math.random().toString(36).substring(2, 15);
    await page.addHero(uniqueName);
    expect(page.getLastHeroName()).toContain('Anna');
    await page.deleteLastHero();
    expect(page.getLastHeroName()).not.toContain(uniqueName);
  });

  it('should be able to reject hero creation by tap on "Back" button', async () => {
    await page.clickAddHeroButton();
    await page.enterName('Anna');
    await page.clickBackButton();
    expect(page.getLastHeroName()).not.toContain('Anna');
  });

  const parameters = [
    { description: 'should create hero with usual name', heroName: 'Anna', result: true},
    { description: 'should create hero with numeric name ', heroName: '3456', result: true},
    { description: 'should create hero with specific symbols name', heroName: '?@#', result: true}
  ];
  parameters.forEach((parameter) => {
    it(parameter.description, async() => {
        await page.addHero(parameter.heroName);
        expect( await page.findHeroByName(parameter.heroName)).toBe(parameter.result);
    });
  });
});
