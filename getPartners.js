var scripts = document.getElementsByTagName("script");

var script = scripts[9].innerText;
var partners;

var start = script.indexOf("partners = [{");

script = script.substring(start + "partners = ".length);

var end = script.indexOf("}}],");

script = script.substring(0, end + 3);

var partners = JSON.parse(script);