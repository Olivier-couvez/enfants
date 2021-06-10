//abonnements au gestionnaire d'evenements
var Nom = document.querySelector("#nom");
var Prenom = document.querySelector("#prenom");
var Datenaiss = document.querySelector("#datenaiss");
var Sexe = "0";
// Bouton écriture dans le web storage
var evtEcriture = document.querySelector("#boutonEcriture");
evtEcriture.addEventListener("click", ecrireLocalStorage);

document.querySelector("#formRadio").addEventListener("change", function () {
  var elts = document.querySelectorAll("#garconRadio");
  if (elts[0].checked === true) {
    Sexe = "0";
  } else {
    Sexe = "1";
  }
  console.log("sexe => ",Sexe)
});

// fonction d ecriture dans le storage

function ecrireLocalStorage() {
  cle = "";
  Age = Array(36);
  Taille = Array(36);
  Poids = Array(36);
  Peri = Array(36);
  for (i = 0; i < 36; i++) {
    Age[i] = i;
    Taille[i] = 0.0;
    Poids[i] = 0.0;
    Peri[i] = 0.0;
  }
  // test de la possiblite d'utiliser le localstorage

  if (typeof localStorage != "undefined" && JSON) {
    /* Déficnition d'un objet Javasript coordonnees personnes */

    if (Nom.value != "" && Prenom.value != "" && Datenaiss.value != "") {
      var coordonneesPersonne = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        datenaiss: document.getElementById("datenaiss").value,
        sexe: Sexe,
        age: Age,
        poids: Poids,
        taille: Taille,
        peri: Peri,
      };
      // création cle
      cle =
        document.getElementById("nom").value +
        document.getElementById("prenom").value +
        document.getElementById("datenaiss").value;
      // Sérialisation des donnees en objet JSON de nom  identite
      localStorage.setItem(cle, JSON.stringify(coordonneesPersonne));

      Nom.value = "";
      Prenom.value = "";
      Datenaiss.value = "";

      // affichage de contrôle
      alert("Enregistrement dans le localstorage effectués");
    } else {
      alert("Vous n'avez pas saisi tous les champs");
    }
  } else {
    // message erreur impossible d'utiliser le local storage
    alert("Enregistrement dans le localstorage impossible");
  }
}
