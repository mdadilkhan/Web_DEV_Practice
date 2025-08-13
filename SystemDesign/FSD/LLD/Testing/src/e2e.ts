import puppeteer from 'puppeteer'


(async()=>{
   
    const browser=await puppeteer.launch({
       headless:false, 
       args:["--window-size=1440,1080"]
    })

    const page=await browser.newPage()

    await page.goto('http://localhost:5173/');
    await page.setViewport({width: 1440, height: 1080});

    console.log("webpage loaded");
    





})()