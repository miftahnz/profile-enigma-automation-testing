import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("Homepage Tests", () => {
  test("Homepage should load successfully", async ({ homePage }) => {
    await homePage.navigate();

    const expectedTexts = {
      contentTitle: "ONE STEP IN BECOMING THE BEST IN THE INDUSTRYRegister Now",
      textProvidingIndonesia: "Providing indonesia with best talents",
      textWhyEnigma: "Why Enigma Camp",
    };

    // ✅ Gunakan homePage.locators agar lebih rapi dan modular
    await expect(homePage.locators.logo).toBeVisible();
    await expect(homePage.locators.title).toContainText(
      expectedTexts.contentTitle
    );
    await expect(homePage.locators.buttonRegister).toBeEnabled();

    // ✅ Verify Headers
    await expect(homePage.locators.headerProvidingIndonesia).toContainText(
      expectedTexts.textProvidingIndonesia
    );
    await expect(homePage.locators.headerWhyEnigma).toContainText(
      expectedTexts.textWhyEnigma
    );
    await expect(homePage.locators.headerWhatTheySay).toContainText(
      "What They Say About Enigma"
    );

    // ✅ Verify Buttons and Other Sections
    await expect(homePage.locators.buttonBootcamps).toBeEnabled();
    await expect(homePage.locators.buttonCorporate).toBeEnabled();
    await expect(homePage.locators.headerPrograms).toContainText(
      "Programs & Services"
    );
    await expect(homePage.locators.headerGraduates).toContainText(
      "Our Graduates Have Worked At"
    );
    await expect(homePage.locators.headerCorporate).toContainText(
      "For Corporate"
    );
    await expect(homePage.locators.headerLoveToRead).toContainText(
      "Love to Read"
    );

    await expect(homePage.locators.cardOfflineBootcamp).toBeEnabled();
    await expect(homePage.locators.cardOnlineBootcamp).toBeEnabled();
    await expect(homePage.locators.cardExperienceHiring).toBeEnabled();
  });
});
