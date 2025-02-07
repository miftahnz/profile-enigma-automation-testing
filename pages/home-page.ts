import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://enigmacamp.com/", {
      waitUntil: "domcontentloaded",
    });
  }

  // ✅ Refactor: Locators sebagai getter agar lebih modular
  get locators() {
    return {
      logo: this.page.getByRole("link", { name: "Logo Enigma" }),
      title: this.page.locator("#title-cta"),
      buttonRegister: this.page.getByRole("link", { name: "Register Now" }),
      buttonBootcamps: this.page.getByRole("button", { name: "Bootcamps" }),
      buttonCorporate: this.page.getByRole("button", {
        name: "Corporate",
        exact: true,
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
      headerProvidingIndonesia: this.page.getByText(
        "Providing indonesia with best talents"
      ),
      headerWhyEnigma: this.page.getByRole("heading", {
        name: "Why Enigma Camp",
      }),
      headerWhatTheySay: this.page.getByRole("heading", {
        name: "What They Say About Enigma",
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
  }
}
