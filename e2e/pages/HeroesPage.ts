import {browser, element, by, $$, $, By} from 'protractor';
import {BasePage} from './BasePage';
import {NavigationModule} from './NavigationModule';

/**
 * Page have url address: "/heroes"
 * */
export class HeroesPage extends BasePage {
  private saveButton = element(by.buttonText('Save'));
  private backButton = element(by.buttonText('Back'));
  private addHeroButton = element(by.buttonText('Add New Hero'));
  private listOfHeroes = $$('.heroes li');
  private headerOfPage = $('my-heroes h2');
  private deleteButton = '.delete-button';

  navigateTo() {
    return browser.get('/heroes');
  }

  async addHero(name: string) {
    await this.clickAddHeroButton();
    await this.enterName(name);
    await this.clickSaveButton();
  }

  async clickBackButton() {
    await this.backButton.click();
  }

  async clickSaveButton() {
   await this.saveButton.click();
  }

  async clickAddHeroButton() {
   await this.addHeroButton.click();
  }

  async enterName(name: string) {
    const nameInput = $('input[placeholder="name"]');
    await nameInput.click();
    await nameInput.sendKeys(name);
  }

  async deleteLastHero() {
    await this.listOfHeroes.last()
      .getWebElement()
      .findElement(By.css(this.deleteButton))
      .click();
  }

  async getLastHeroName(): Promise<string> {
    return this.listOfHeroes.last().getText();
  }

  async getHeaderText(): Promise<string> {
    return await this.headerOfPage.getText();
  }

  getNavigationBlock() {
    return new NavigationModule();
  }

  async findHeroByName(heroName: string): Promise<boolean> {
    return (await this.listOfHeroes.getText()).toString().includes(heroName);
  }
};
