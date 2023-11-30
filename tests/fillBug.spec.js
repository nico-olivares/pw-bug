import { test, expect } from '@playwright/test'

test('should fill once', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    let username = page.getByPlaceholder('Username', { exact: true })
    await username.fill('text')
    await expect(username).toHaveValue('text')
})