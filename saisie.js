var nBoutonvalPat = document.querySelector("#BoutonPat");
var nBoutonvalAnn = document.querySelector("#BoutonAnn");
var Age = document.querySelector("#Age");
var Poids = document.querySelector("#Poids");
var Taille = document.querySelector("#Taille");
var Peri = document.querySelector("#Peri");

clePat = "";

for (let i = 0; i < localStorage.length; i++) {
  let cle = localStorage.key(i);
  // if (i == 0) {
  //     clePat = cle;
  // }
  let valeur = JSON.parse(localStorage.getItem(cle));
  console.log(valeur["nom"], valeur.prenom, valeur.date);
  optionItemDep = document.createElement("option");
  optionItemDep.appendChild(
    document.createTextNode(
      valeur.nom + " - " + valeur.prenom + " - " + valeur.date
    )
  );
  listepat.appendChild(optionItemDep);
}

nBoutonvalPat.addEventListener("click", EnregDonneesPatient);
nBoutonvalAnn.addEventListener("click", AnnuleSaisie);

function EnregDonneesPatient() {
    var ageNum = parseInt(Age.value);
  if (
    Age.value != "" &&
    Poids.value != "" &&
    Taille.value != "" &&
    Peri.value != ""
  ) {

      if (ageNum > 0) {
          if (ageNum < 35){
          
      
    selectItem = listepat.options[listepat.selectedIndex].value; // Récupération du texte du <option> d'index "choice"

    clePat = selectItem.replace(" - ", "");
    clePat = clePat.replace(" - ", "");
    let valeur = JSON.parse(localStorage.getItem(clePat));

    valeur.poids[Age.value] = Poids.value;
    valeur.taille[Age.value] = Taille.value;
    valeur.peri[Age.value] = Peri.value;
    localStorage.setItem(clePat, JSON.stringify(valeur));
    alert("Les données ont été sauvegardées!");
    Age.value = "";
    Poids.value = "";
    Taille.value = "";
              Peri.value = "";
          } else {
            alert("L'age doit être compris entre 0 et 35 !");
            }
      } else {
        alert("L'age doit être compris entre 0 et 35 !");
        }
  } else {
    alert("Vous n'avez pas saisie toutes les données !");
  }
}

function AnnuleSaisie() {
  Age.value = "";
  Poids.value = "";
  Taille.value = "";
  Peri.value = "";
}
