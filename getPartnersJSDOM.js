const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the HTML content from the saved file
const htmlContent = fs.readFileSync('page.html', 'utf-8');

// Use JSDOM to create a DOM-like environment
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Extract the script and parse the partners data
var scripts = document.getElementsByTagName("script");
var script = scripts[8].innerText;
var start = script.indexOf("partners = [{");
script = script.substring(start + "partners = ".length);
var end = script.indexOf("}}];");
script = script.substring(0, end + 3);
var partners = JSON.parse(script);

// Remove avatars from partners
for (var i = 0; i < partners.length; i++) {
    delete partners[i].avatar;
}

// Output the modified partners array as JSON
console.log(JSON.stringify(partners, null, 2));
