import {browser, element, by, protractor, $, $$} from 'protractor';
import {BasePage} from './BasePage';
import {WebdriverWebElement} from 'protractor/built/element';
import {HeroDetailsPage} from './HeroDetailsPage';
import {NavigationModule} from './NavigationModule';

/**
 * Page that opens by default and have url address: "/dashboard"
 * */
export class DashboardPage extends BasePage {
  private searchBox: WebdriverWebElement;
  private searchResults;
  private topHeroes;
  private headerOfPage: WebdriverWebElement;

  constructor() {
    super();
    this.searchBox = element(by.id('search-box'));
    this.searchResults = $$ ('.search-result');
    this.topHeroes = $$('.module');
    this.headerOfPage = $('my-dashboard h3');
  }
  navigateTo() {
    return browser.get('/dashboard');
  }

  async navigateToHeroDetailByIndex(index: number): Promise<HeroDetailsPage> {
    await browser.wait(await this.isVisible(this.searchBox), 3000);
    await this.topHeroes.get(index).click();
    return new HeroDetailsPage();
  }

  async searchFor(name): Promise<void> {
      await this.searchBox.click();
      await this.searchBox.sendKeys(name);
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  async selectSearchResultByIndex( index: number ): Promise<string> {
     return this.searchResults.get(index).getText();
  }

  async getHeaderText(): Promise<string> {
    return this.headerOfPage.getText();
  }

  getNavigationBlock(): NavigationModule {
    return new NavigationModule();
  }

  async getTopHeroesQuantity(): Promise<number> {
    return this.topHeroes.count();
  }
}
