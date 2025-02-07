import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test.describe("Homepage Tests", () => {
  test("Homepage should load successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.verifyHomePage();
  });

  // test("Navigation menu should work", async ({ page }) => {
  //   const homePage = new HomePage(page);
  //   await homePage.navigate();

  // await homePage.navigateTo('About Us');
  // await expect(page).toHaveURL(/about/);

  // await homePage.navigateTo('Services');
  // await expect(page).toHaveURL(/services/);

  // await homePage.navigateTo('Contact');
  // await expect(page).toHaveURL(/contact/);
  // });

  // test('Social media links should be visible', async ({ page }) => {
  //   const homePage = new HomePage(page);
  //   await homePage.navigate();
  //   await homePage.verifySocialMediaLinks();
  // });
});
