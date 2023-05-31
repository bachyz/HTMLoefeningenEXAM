function datumTonen(){

    datum = new Date();
    document.getElementById("datum").innerHTML = datum.toLocaleDateString();
}

function opvolgingTonen(){
    var voornaam;
    voornaam = "Luc";
    document.getElementById("pensioen").innerHTML = voornaam;
    voornaam = "Kristof";
    document.getElementById("opvolger").innerHTML = voornaam;
}