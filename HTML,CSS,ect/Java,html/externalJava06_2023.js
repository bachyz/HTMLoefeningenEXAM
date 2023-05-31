function welkom()
{
    var geslacht = document.getElementById("geslacht").value;
    var naam = document.getElementById("naam").value;


    if(geslacht == "M")
        {geslacht = "meneer";}
    else if(geslacht == "V")
        {geslacht = "mevrouw";}
    else if(geslacht == "X")
        {geslacht = "";}




        document.getElementById("begroeting").innerHTML = "Hallo " + geslacht + " " + naam;

}