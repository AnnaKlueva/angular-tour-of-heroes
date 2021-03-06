import { element, by, $} from 'protractor';
import {BasePage} from './BasePage';
import {DashboardPage} from './DashboardPage';

/**
 * Page has url address: "/detail/{heroNumber}/"
 * */
export class HeroDetailsPage extends BasePage {
  private headerOfPage = $('my-hero-detail h2');
  private nameInput = $('input[placeholder="name"]');
  private saveButton = element(by.buttonText('Save'));
  private backButton = element(by.buttonText('Back'));

  async getHeaderText(): Promise<string> {
    return this.headerOfPage.getText();
  }

  async getHeroName(): Promise<string> {
    return await this.nameInput.getText();
  }

  async enterName(newHeroName: string): Promise<void> {
    await this.nameInput.clear();
    await this.nameInput.sendKeys(newHeroName);
  }

  async clickSave(): Promise<DashboardPage> {
    await this.saveButton.click();
    await this.isNotVisible(this.saveButton);
    return new DashboardPage();
  }

  async clickBackButton(): Promise<DashboardPage> {
    await this.backButton.click();
    await this.isNotVisible(this.backButton);
    return new DashboardPage();
  }
};
