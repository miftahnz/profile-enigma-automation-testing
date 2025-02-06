import { expect, Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://enigmacamp.com/");
  }

  async verifyHomePage() {
    const locators = {
      logo: this.page.getByRole("link", { name: "Logo Enigma" }),
      title: this.page.locator("#title-cta"),
      headerProvidingIndonesia: this.page.getByText(
        "Providing indonesia with best"
      ),
      headerWhyEnigma: this.page.getByRole("heading", {
        name: "Why Enigma Camp",
      }),
      headerWhatTheySay: this.page.getByRole("heading", {
        name: "What They Say About Enigma",
      }),
      cardOfflineBootcamp: this.page.getByRole("link", {
        name: "Offline Bootcamp Enigma Camp 1.0 ornament-circles arrow-up-right-circle",
      }),
      cardOnlineBootcamp: this.page.getByRole("link", {
        name: "Dashboard banner online",
      }),
      cardExperienceHiring: this.page.getByRole("link", {
        name: "Experience Hiring Get Hired",
      }),
      buttonRegister: this.page.getByRole("link", { name: "Register Now " }),
      buttonBootcamps: this.page.getByRole("button", { name: "Bootcamps" }),
      buttonCorporate: this.page.getByRole("button", {
        name: "Corporate",
        exact: true,
      }),
      headerPrograms: this.page.getByRole("heading", {
        name: "Programs & Services",
      }),
      headerGraduates: this.page.getByRole("heading", {
        name: "Our Graduates Have Worked At",
      }),
      headerCorporate: this.page.getByRole("heading", {
        name: "For Corporate",
      }),
      headerLoveToRead: this.page.getByRole("heading", {
        name: "Love to Read",
      }),
    };

    // Expected texts
    const expectedTexts = {
      contentTitle: "ONE STEP IN BECOMING THE BEST IN THE INDUSTRYRegister Now",
      textProvidingIndonesia: "Providing indonesia with best talents",
      textWhyEnigma: "Why Enigma Camp",
    };

    // Assertions
    await expect(locators.logo).toBeVisible();
    await expect(locators.title).toContainText(expectedTexts.contentTitle);
    await expect(locators.buttonRegister).toBeEnabled();

    // Verify Bootcamp Cards
    await this.verifyBootcampCards(locators);

    // Verify Headers
    await expect(locators.headerProvidingIndonesia).toContainText(
      expectedTexts.textProvidingIndonesia
    );
    await expect(locators.headerWhyEnigma).toContainText(
      expectedTexts.textWhyEnigma
    );
    await expect(locators.headerWhatTheySay).toContainText(
      "What They Say About Enigma"
    );

    // Verify Buttons and Other Sections
    await expect(locators.buttonBootcamps).toBeEnabled();
    await expect(locators.buttonCorporate).toBeEnabled();
    await expect(locators.headerPrograms).toContainText("Programs & Services");
    await expect(locators.headerGraduates).toContainText(
      "Our Graduates Have Worked At"
    );
    await expect(locators.headerCorporate).toContainText("For Corporate");
    await expect(locators.headerLoveToRead).toContainText("Love to Read");
  }

  private async verifyBootcampCards(locators: {
    cardOfflineBootcamp: any;
    cardOnlineBootcamp: any;
    cardExperienceHiring: any;
  }) {
    await expect(locators.cardOfflineBootcamp).toBeEnabled();
    await expect(locators.cardOnlineBootcamp).toBeEnabled();
    await expect(locators.cardExperienceHiring).toBeEnabled();
  }
}
