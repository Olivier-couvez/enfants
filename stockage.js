//abonnements au gestionnaire d'evenements
var Nom = document.querySelector("#nom");
var Prenom = document.querySelector("#prenom");
var Datenaiss = document.querySelector("#date");
// Bouton écriture dans le web storage
var evtEcriture = document.querySelector("#boutonEcriture");
evtEcriture.addEventListener("click", ecrireLocalStorage);

// fonction d ecriture dans le storage

function ecrireLocalStorage() {
  cle = "";
  Age = Array(36);
  Taille = Array(36);
  Poids = Array(36);
  Peri = Array(36);
  for (i = 0; i < 36; i++){
    Age[i] = i;
    Taille[i] = 0.0;
    Poids[i] = 0.0;
    Peri[i] = 0.0;
  }
  // test de la possiblite d'utiliser le localstorage

  if (typeof localStorage != "undefined" && JSON) {
    /* Déficnition d'un objet Javasript coordonnees personnes */
    var coordonneesPersonne = {
      nom: document.getElementById("nom").value,
      prenom: document.getElementById("prenom").value,
      datenaiss: document.getElementById("Date").value,
      age: Age,
      poids: Poids,
      taille: Taille,
      peri: Peri,
    };
    // création cle
    cle = document.getElementById("nom").value + document.getElementById("prenom").value + document.getElementById("Date").value;
    // Sérialisation des donnees en objet JSON de nom  identite
    localStorage.setItem(cle, JSON.stringify(coordonneesPersonne));
    
    Nom.value = "";
    Prenom.value = "";
    Datenaiss.value = "";

    // affichage de contrôle
    alert("Enregistrement dans le localstorage effectués");
  } else {
    // message erreur impossible d'utiliser le local storage
    alert("Enregistrement dans le localstorage impossible");
  }
}


