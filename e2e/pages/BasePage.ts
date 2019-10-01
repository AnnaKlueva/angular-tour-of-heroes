import { protractor} from 'protractor';

export class BasePage {
  /**
   * Wrappers for expected conditions
   *
   * Allow to add logging, etc...
   * @returns {ExpectedCondition}
   */
  isVisible(locator) {
    return protractor.ExpectedConditions.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return protractor.ExpectedConditions.invisibilityOf(locator);
  }

  isClickable(locator) {
    return protractor.ExpectedConditions.elementToBeClickable(locator);
  }

  hasText(locator, text) {
    return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
  }
}
