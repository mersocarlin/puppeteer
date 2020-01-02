import puppeteer, { Browser, Page } from 'puppeteer'

// Source: https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagetitle

describe('with-jest example', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    })

    page = await browser.newPage()

    await page.goto('http://www.google.com')
  })

  afterAll(async () => {
    await browser.close()
  })

  it('should get title', async () => {
    const title = await page.title()
    console.log('title is', title)
  })
})
