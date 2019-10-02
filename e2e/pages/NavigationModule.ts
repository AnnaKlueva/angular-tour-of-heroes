import {DashboardPage} from './DashboardPage';
import {$} from 'protractor';
import {WebdriverWebElement} from 'protractor/built/element';
import {HeroesPage} from './HeroesPage';

/**
 * Module with navigation that exists on several pages
 * */
export class NavigationModule  {
  private linkOnDashboardPage: WebdriverWebElement;
  private linkOnHeroesPage: WebdriverWebElement;

  constructor() {
    this.linkOnDashboardPage = $('a[routerlink="/dashboard"]');
    this.linkOnHeroesPage = $('a[routerlink="/heroes"]');
  }

  async navigateToDashboardPage() {
    await this.linkOnDashboardPage.click();
    return new DashboardPage();
  }

  async navigateToHeroesPage() {
    await this.linkOnHeroesPage.click();
    return new HeroesPage();
  }
}



