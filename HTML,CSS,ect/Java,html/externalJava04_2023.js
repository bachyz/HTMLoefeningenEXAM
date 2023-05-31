function plus()
{
    var getal1 = parseInt(document.getElementById("getal1").value);
    var getal2 = parseInt(document.getElementById("getal2").value);

    var resultaat = getal1 + getal2;

    document.getElementById("resultaat").innerHTML = resultaat;

}

function subtract()
{
    var getal1 = parseInt(document.getElementById("getal1").value);
    var getal2 = parseInt(document.getElementById("getal2").value);

    var resultaat = getal1 - getal2;

    document.getElementById("resultaat").innerHTML = resultaat;

}


function maal()
{
    var getal1 = parseInt(document.getElementById("getal1").value);
    var getal2 = parseInt(document.getElementById("getal2").value);

    var resultaat = getal2 * getal1;

    document.getElementById("resultaat").innerHTML = resultaat;

}



function deel()
{
    var getal1 = parseInt(document.getElementById("getal1").value);
    var getal2 = parseInt(document.getElementById("getal2").value);

    var resultaat = getal1 / getal2;

    document.getElementById("resultaat").innerHTML = resultaat;

}



