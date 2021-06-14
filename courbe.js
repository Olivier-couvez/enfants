//Garçons
var poidsGMin = [
      1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800,
      4000, 4200, 4400, 4600, 4800, 4900, 5000, 5200, 5400, 5600, 5800, 5900,
      6600, 6800, 7000, 7400, 7800, 8100, 8300, 8800, 9200, 9400, 10000, 11100,
];
var poidsGMax = [
      3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800,
      6000, 7200, 7400, 7600, 7800, 8800, 9000, 9200, 9400, 9600, 9800, 10000,
      10200, 10400, 10600, 10800, 10900, 11200, 11800, 12000, 12200, 12600,
      13000,
];
var tailleGMin = [46, 46, 47, 47, 48, 48, 49, 49, 51, 52, 53, 54, 55, 55, 57, 58, 59, 59, 60, 61, 61, 62, 62, 63, 63, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69];
var tailleGMax = [54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 60, 60, 60, 64, 64, 65, 65, 66, 66, 67, 67, 68, 70, 71, 72, 74, 74, 76, 78, 78, 79, 80, 80, 82, 83];
var periGMin =   [32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 36, 37, 37, 38, 38, 38, 39, 39, 40, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45];
var periGMax =   [37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51];
//Filles
var poidsFMin = [
      2400, 3200, 4200, 4500, 4800, 5300, 5800, 6000, 6400, 6600, 6800, 7000,
      7200,
];
var poidsFMax = [
      4400, 5200, 6500, 7400, 8200, 8700, 9200, 9600, 10000, 10400, 10600,
      11000, 11400,
];
var tailleFMin = [46, 49, 52, 55, 57, 59, 60, 62, 63, 65, 66, 67, 68];
var tailleFMax = [54, 57, 61, 64, 67, 69, 71, 73, 74, 75, 77, 78, 79];
var periFMin = [32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var periFMax = [37, 38, 39, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51];

var nBoutonAffCourbe = document.querySelector("#BoutonCourbe");

var Age = document.querySelector("#Age");
var Poids = document.querySelector("#Poids");
var Taille = document.querySelector("#Taille");
var Peri = document.querySelector("#Peri");
var valeur;
var selectTrie = new Array();
var i = 0;
var valMinP = new Array();
var valMaxP = new Array();
var valMinT = new Array();
var valMaxT = new Array();
var valMinPe = new Array();
var valMaxPe = new Array();

// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["line", "corechart"] });
// Set a callback to run when the Google Visualization API is loaded.

clePat = "";

for (i = 0; i < localStorage.length; i++) {
      let cle = localStorage.key(i);
      let valeur = JSON.parse(localStorage.getItem(cle));
      selectTrie[i] =
            valeur.nom + " - " + valeur.prenom + " - " + valeur.datenaiss;
}

selectTrie.sort();

for (i = 0; i < localStorage.length; i++) {
      optionItemDep = document.createElement("option");
      optionItemDep.appendChild(document.createTextNode(selectTrie[i]));
      listepat.appendChild(optionItemDep);
}

nBoutonAffCourbe.addEventListener("click", AfficheCourbes);

function AfficheCourbes() {
      selectItem = listepat.options[listepat.selectedIndex].value; // Récupération du texte du <option> d'index "choice"

      clePat = selectItem.replace(" - ", "");
      clePat = clePat.replace(" - ", "");
      valeur = JSON.parse(localStorage.getItem(clePat));

      if (valeur.sexe == 0) {
            valMinP = poidsGMin;
            valMaxP = poidsGMax;
            valMinT = tailleGMin;
            valMaxT = tailleGMax;
            valMinPe = periGMin;
            valMaxPe = periGMax;
      } else {
            valMinP = poidsFMin;
            valMaxP = poidsFMax;
            valMinT = tailleFMin;
            valMaxT = tailleFMax;
            valMinPe = periFMin;
            valMaxPe = periFMax;
      }

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(affGraphiquesPoids);
      google.charts.setOnLoadCallback(affGraphiquesTaille);
      google.charts.setOnLoadCallback(affGraphiquesPeri);
      google.charts.setOnLoadCallback(affGraphiquesArea);
}



function affGraphiquesPoids() {
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn("number", "Mois");
      data.addColumn("number", "Minimum");
      data.addColumn("number", "L' enfant");
      data.addColumn("number", "Maximum");

      for (i = 0; i < valMinP.length; i++) {
            console.log(valeur.poids[i]);
            data.addRows([
                  [i, valMinP[i], parseInt(valeur.poids[i]), valMaxP[i]],
            ]);
      }

      var options = {
                  title: "Courbes de poids d'un enfant",
                  subtitle: "En grammes",
                  curveType:'function',
                  lineWidth: 5,
                  series: [{'color': '#F1CA3A'}],
                  intervals: { 'style':'area' },
      };

      var chart = new google.visualization.LineChart(document.getElementById("ChartPoids"));

      chart.draw(data, options);
}

function affGraphiquesTaille() {
      // Create the data table.
      var data1 = new google.visualization.DataTable();
      data1.addColumn("number", "Mois");
      data1.addColumn("number", "Minimum");
      data1.addColumn("number", "L' enfant");
      data1.addColumn("number", "Maximum");

      for (i = 0; i < valMinT.length; i++) {
            console.log(valeur.poids[i]);
            data1.addRows([
                  [i, valMinT[i], parseInt(valeur.taille[i]), valMaxT[i]],
            ]);
      }

      var options = {
                  title: "Courbes de taille d'un enfant",
                  subtitle: "En cm",
                  curveType:'function',
                  lineWidth: 5,
                  series: [{'color': '#F1CA3A'}],
                  intervals: { 'style':'area' },
      };

      var chart1 = new google.visualization.LineChart(document.getElementById("ChartTaille"));

      chart1.draw(data1, options);
}

function affGraphiquesPeri() {
      // Create the data table.
      var data2 = new google.visualization.DataTable();
      data2.addColumn("number", "Mois");
      data2.addColumn("number", "Minimum");
      data2.addColumn("number", "L' enfant");
      data2.addColumn("number", "Maximum");

      for (i = 0; i < valMinPe.length; i++) {
            console.log(valeur.poids[i]);
            data2.addRows([
                  [i, valMinPe[i], parseInt(valeur.peri[i]), valMaxPe[i]],
            ]);
      }

      var options = {
                  title: "Courbes des Périmètres craniens d'un enfant",
                  subtitle: "En cm",
                  curveType:'function',
                  lineWidth: 5,
                  series: [{'color': '#F1CA3A'}],
                  intervals: { 'style':'area' },
      };

      var chart2 = new google.visualization.LineChart(document.getElementById("ChartPeri"));

      chart2.draw(data2, options);
}

function affGraphiquesArea() {
      // Create the data table.
      var data3 = new google.visualization.DataTable();
      data3.addColumn("number", "Mois");

      data3.addColumn("number", "L' enfant");

      data3.addColumn({id:'i0', type:'number', role:'interval'});
        data3.addColumn({id:'i1', type:'number', role:'interval'});

      for (i = 0; i < valMinPe.length; i++) {
            console.log(valeur.poids[i]);
            data3.addRows([
                  [i, parseInt(valeur.peri[i]),valMinPe[i],  valMaxPe[i]],
            ]);
      }

      var options = {
                  title: "Courbes des Périmètres craniens d'un enfant TEST AREA !!!!",
                  subtitle: "En cm",
                  curveType:'function',
                  lineWidth: 5,
                  intervals: { 'color':'series-color' },
                  interval: {
                      'i0': { 'color': '#4374E0', 'style':'bars', 'barWidth':0, 'lineWidth':4, 'pointSize':8, 'fillOpacity':1 },
                      'i1': { 'color': '#E49307', 'style':'bars', 'barWidth':0, 'lineWidth':4, 'pointSize':8, 'fillOpacity':1 },
                      
                  },
      };

      var chart3 = new google.visualization.LineChart(document.getElementById("ChartArea"));

      chart3.draw(data3, options);
}