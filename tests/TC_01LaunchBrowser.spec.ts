import{chromium, test} from "@playwright/test"
import { DatabaseSync } from "node:sqlite"
test('Launching browser without page class', async () => {
   const browser = await chromium.launch()
   const context = await browser.newContext()
   viewport:({
    width:1280,
    height:559
})
   const managerPage = await context.newPage()
   await managerPage.goto("https://ecommerce-playground.lambdatest.io/")
   await managerPage.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
   await managerPage.waitForTimeout(2000)
   //await page.click("text=Login")
   await managerPage.getByText("Login").click()
   await managerPage.waitForTimeout(2000)
   await managerPage.getByPlaceholder("E-Mail Address").fill("shailashri@stockholmitacademy.org")
   await managerPage.locator("#input-password").fill("123456789")
   await managerPage.getByRole('button', {name: 'Login'}).click();
   await managerPage.waitForTimeout(2000)

//    const dashboardPage = await context.newPage() //cookies will be shared
//    await dashboardPage.goto("https://ecommerce-playground.lambdatest.io/")
//    await dashboardPage.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
//    await dashboardPage.waitForTimeout(2000)

const context2 = await browser.newContext()
viewport:({
    width:1280,
    height:559
})
const clientPage = await context2.newPage() //cookies will Not be shared- Fresh page with new context
await clientPage.waitForTimeout(2000)
await clientPage.goto("https://ecommerce-playground.lambdatest.io/")
await clientPage.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
await clientPage.waitForTimeout(2000)
await clientPage.getByText("Login").click()
await clientPage.waitForTimeout(2000)
await clientPage.getByPlaceholder("E-Mail Address").fill("shailashri@stockholmitacademy.org")
await clientPage.locator("#input-password").fill("123456789")
await clientPage.getByRole('button', {name: 'Login'}).click();
await clientPage.waitForTimeout(2000)
}

)