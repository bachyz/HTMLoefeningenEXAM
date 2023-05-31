document.write("Dit is een voorbeeld van een extern javascriptbestand.")

datum = new Date();
document.write("<p>" + datum.toLocaleDateString() + "</p>");

document.getElementById("datum").innerHTML = datum.toLocaleDateString();

