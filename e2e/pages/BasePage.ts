import { protractor} from 'protractor';

export class BasePage {
  /**
   * Wrappers for expected conditions
   * @returns {ExpectedCondition}
   */
  async isVisible(webElement) {
    return protractor.ExpectedConditions.visibilityOf(webElement);
  }

  async isNotVisible(webElement) {
    return protractor.ExpectedConditions.invisibilityOf(webElement);
  }
}
