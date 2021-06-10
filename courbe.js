var nBoutonvalPat = document.querySelector("#BoutonCourbe");
var Age = document.querySelector("#Age");
var Poids = document.querySelector("#Poids");
var Taille = document.querySelector("#Taille");
var Peri = document.querySelector("#Peri");


clePat = "";

	
for (let i=0; i < localStorage.length; i++) {
    let cle = localStorage.key(i);
    // if (i == 0) {
    //     clePat = cle;
    // }
    let valeur = JSON.parse(localStorage.getItem(cle));
    console.log(valeur['nom'],valeur.prenom,valeur.date)
    optionItemDep = document.createElement("option");
    optionItemDep.appendChild(document.createTextNode(valeur.nom+" - "+valeur.prenom+" - "+valeur.date));
	listepat.appendChild(optionItemDep);
}

nBoutonvalPat.addEventListener("click", EnregDonneesPatient);
nBoutonvalAnn.addEventListener("click", AnnuleSaisie);

function EnregDonneesPatient() {
    if ( (Age.value != '') && (Poids.value != '') && (Taille.value != '') && (Peri.value != '') )
        {
    
    selectItem = listepat.options[listepat.selectedIndex].value; // Récupération du texte du <option> d'index "choice"      

    clePat = selectItem.replace(" - ", "");
    clePat = clePat.replace(" - ","");
        let valeur = JSON.parse(localStorage.getItem(clePat));
    } else {
        alert("Vous n'avez pas saisie toutes les données !")        
    }
}

function AnnuleSaisie()
    {
        Age.value = "";
        Poids.value = "";
        Taille.value = "";
        Peri.value = "";
    }