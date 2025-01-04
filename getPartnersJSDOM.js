const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the HTML content from the saved file
const htmlContent = fs.readFileSync('page.html', 'utf-8');

// Use JSDOM to create a DOM-like environment
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Get all script tags
var scripts = document.getElementsByTagName("script");

// Look for an inline script containing "partners = [{"
let partnersScript = null;
for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].innerHTML.includes("partners = [{")) {
        partnersScript = scripts[i].innerHTML;
        break;
    }
}

if (partnersScript) {
    // Extract the partners data
    var start = partnersScript.indexOf("partners = [{");
    partnersScript = partnersScript.substring(start + "partners = ".length);
    var end = partnersScript.indexOf("}}];");
    if (end !== -1) {
        partnersScript = partnersScript.substring(0, end + 3);
        var partners = JSON.parse(partnersScript);

        // Remove avatars from partners
        for (var i = 0; i < partners.length; i++) {
            delete partners[i].avatar;
        }

        // Output the modified partners array as JSON
        fs.writeFileSync('partners.json', JSON.stringify(partners, null, 2));
    }
}
