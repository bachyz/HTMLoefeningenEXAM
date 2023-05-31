function bestellen()
{
    mijnBestelling = "U heeft besteld:   ";
    if(document.bestelForm.eten1.checked)
    {
        mijnBestelling += "pizza \n";

    }

    else if(document.bestelForm.eten2.checked)
    {
        mijnBestelling += "pasta \n";
    }
    else if(document.bestelForm.eten3.checked)
    {
        mijnBestelling += "calzone \n";
    }
    mijnBestelling += "//     Extra garnituur: ";
    if(document.bestelForm.vlees.checked)
    {
        mijnBestelling+= "vlees";
    }
    if(document.bestelForm.vis.checked)
    {
        mijnBestelling+= "vis";
    }
    if(document.bestelForm.kaas.checked)
    {
        mijnBestelling+= "kaas";
    }
    alert(mijnBestelling);
}