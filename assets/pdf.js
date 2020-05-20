const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');
const path = require('path');

function generarPdf(data){
    const compile = async function(templateName, data){
        const filePath = path.join(process.cwd(), 'template', `${templateName}.hbs`)
        const html = await fs.readFile(filePath, 'utf-8')
        return hbs.compile(html)(data)
    };
    
    hbs.registerHelper('dateFormat', function(value, format){
        console.log('formatting', value, format);
        return moment(value).format(format);
    });
    
    (async function(){
        try {
            
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
    
            const content = await compile('shot-list', data)
            await page.setContent(content);
            await page.emulateMedia('screen');
            await page.pdf({
                path: 'generatedpdf.pdf',
                format: 'A4',
                printBackground: true
            });
    
            console.log('done');
            await browser.close();
            process.exit();
    
        } catch (e) {
            console.log('my bad bro', e);
        }
    })();
}