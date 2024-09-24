const puppeteer = require("puppeteer")
const fs = require("fs/promises")
const cron = require("node-cron")

async function start(){
    //Launches a new instance of a headless Chromium browser
    const browser = await puppeteer.launch()

    //Opens a new tab in the browser 
    const page = await browser.newPage()

    //Instructs the page to navigate to the specified URL
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    //page.evaluate allows to execute Javascript to interact with the DOM of the page 
    const names = await page.evaluate(() => {
        //querySelectorAll selects all the elements that match the specified CSS selector
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n"))

    await page.click("#clickme")
    const clickedData = await page.$eval("#data", el => el.textContent)
    console.log(clickedData)

    const photos = await page.$$eval("img", (imgs) => {
        return imgs.map(x => x.src)
    })

    await page.type("#ourfield", "blue")
    await Promise.all([page.click("#ourform button"), page.waitForNavigation()])

    const info = await page.$eval("#message", te => te.textContent)
    console.log(info)


    for(const photo of photos) {
        const imagePage = await page.goto(photo)
        await fs.writeFile(photo.split("/").pop(), await imagePage.buffer())
    }

    //Taking a screenshot 
    // await page.screenshot({path: "amazing.png", fullPage: true})

    //closing the browser
    await browser.close()


}

cron.schedule("*/5 * * * * *", start)

// setInterval(start, 5000) 'Calling this at the end sets the code to run every 5secs without stopping