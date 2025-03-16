// const { test, expect } = require('@playwright/test');
// const {expect} = requuire("../playwright.config")

// test('First Playwright test', async ({ browser }) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());
// });

// test('Page Playwright test', async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// });

//Assertionc
// const { test, expect } = require('@playwright/test');

// test('Assertion Example: Verify Login Page', async ({ page }) => {
//     // Navigate to the login page
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

//     // Assertion: Check if the page title contains "Login"
//     await expect(page).toHaveTitle(/Login/);

//     // Assertion: Verify that the login button is visible
//     const loginButton = page.locator("#signInBtn");
//     await expect(loginButton).toBeVisible();

//     // Assertion: Verify if the username input field is editable
//     const usernameField = page.locator("#username");
//     await expect(usernameField).toBeEditable();
// });

const { test, expect } = require("@playwright/test");

test("@Web Client App login", async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = "zara coat 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});
