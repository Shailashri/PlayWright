import {expect, test } from "@playwright/test";
test.use({
    viewport:{
    width:1280,
    height:720 
}
})
test('Assertions Test', async ({page,baseURL}) =>{
// await page.setViewportSize({
//     width:1280,
//     height:559
// })
//test.slow(browserName === 'firefox')
await page.goto(`${baseURL}`)
//page.locator("input#user-message").fill("Hello World!!")
const messagetext = "My message !!"
const messageBox = page.locator("//input[@id='user-message']")
//await messageBox.scrollIntoViewIfNeeded()
await expect(messageBox).toHaveAttribute("placeholder", "Please enter your Message")
await messageBox.fill(`${messagetext}`)
await page.waitForTimeout(1000)
await page.click("#showInput")
//expect(page.locator("p#message")).toHaveText(`${messagetext}`)
await expect(page.locator('[id="message"]')).toHaveText(`${messagetext}`)
//await expect(page.locator('[id="message"]')).toHaveText(`${messagetext}` +"1") //Should through an error message

await page.waitForTimeout(1000)
//await page.click('id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"')// for cookies
//await page.click('class="CybotCookiebotDialogBodyButton"')
}
)