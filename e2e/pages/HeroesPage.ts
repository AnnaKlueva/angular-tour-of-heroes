import {browser, element, by, $$, $} from 'protractor';
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
  private listOfDeleteButtons = $$('.delete-button');
  private headerOfPage = $('my-heroes h2');

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
    return await this.listOfDeleteButtons.last().click();
  }

  async getLastHeroName() {
    return this.listOfHeroes.last().getText();
  }

  async getHeaderText() {
    return await this.headerOfPage.getText();
  }

  getNavigationBlock() {
    return new NavigationModule();
  }
};
