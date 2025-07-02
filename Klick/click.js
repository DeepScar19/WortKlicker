let score = 0;
let wpc = 1;
let wps = 0;
let gesamtklicks = 0;
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");
const upgrades = document.getElementById("upgrades");
const achievements = document.getElementById("achievements");
const schreibgeraetbutton = document.getElementById("levelup");
const schreibgeraetdisplay = document.getElementById("schreibgeraet");
const schreibgeraetdisplayelements = [document.getElementById("schreibgeraet"), document.getElementById("nextSchreibgeraet"), document.getElementById("nextSchreibgeraetprice")];
const schreibgeraeteList = [["Bleistift", 0, 1],["Füller", 70, 2], ["Kugelschreiber", 600, 10], ["Schreibmaschine", 3500, 50], ["Touchscreen", 10000, 100], ["Tastatur", 50000, 300], ["Lasertastatur", 75000, 500], ["Spracherkennung", 200000, 2000], ["Neuralink", 500000, 5000], ["OpenAI", 2000000, 15000]];
const schreibgeraetLevel = 0;
let nextschreibgeraetPrice = 70;

class Upgrade {
  level = 0;

  constructor(name, price, increase, price_increase){
    this.name = name;
    this.price = price;
    this.increase = increase;
    this.price_increase = price_increase;
    this.button = document.createElement("button");
    this.buttontext = document.createTextNode(this.name);
    this.button.appendChild(this.buttontext);
    this.pricep = document.createElement("p");
    this.pricep.appendChild(document.createTextNode("Preis: "));
    this.spanprice = document.createElement("span");
    this.spanprice.id = name;
    this.spanprice.textContent = price + " ("+increase+")";
    this.pricep.appendChild(this.spanprice);
    upgrades.appendChild(this.button);
    upgrades.appendChild(this.pricep);
    this.button.addEventListener("click", () => {
      this.purchase()
      scoreDisplay.textContent = Math.floor(score);
    });
  }
  purchase() {
    if (score >= this.price) {
      this.level += 1;
      score -= this.price;
      this.price = Math.floor(this.price*1.3
        );
      wps += this.increase;
      document.getElementById("wps").innerHTML = wps.toFixed(1);
      this.spanprice.innerHTML = this.price + " ("+this.increase+")";
    }
  }
  colorUpdate(){
    if (score >= this.price){
      this.button.style.background = "green";
    }
    if (score < this.price && this.button.style.background === "green"){
      this.button.style.background = "red";
    }
  }
  
}

const kindergartenkind = new Upgrade("Kindergarten", 30, 0.2, 1.05);
const grundschueler = new Upgrade("Grundschüler", 100, 0.5, 1.1);
const schueler = new Upgrade("Schüler", 200, 1, 1.2);
const student = new Upgrade("Student", 1000, 5, 1.22);
const redakteur = new Upgrade("Redakteur", 5000, 20, 100);
const autor = new Upgrade("Autor", 15000, 50, 100);
const verlag = new Upgrade("Verlag", 40000, 100, 100);
const druckerei = new Upgrade("Druckerei", 100000, 300, 100);
const zeitung = new Upgrade("Zeitung", 150000, 500, 100);
const epaper = new Upgrade("ePaper", 500000, 1000, 100);
const computer = new Upgrade("Computer", 800000, 1500, 100);
const roboter = new Upgrade("Roboter", 1500000, 3000, 100);
const quantencomputer = new Upgrade("Quantencomputer", 4000000, 5000, 100);
const ki = new Upgrade("KI", 12000000, 25000, 100);

const upgradesList = [kindergartenkind, grundschueler, schueler, student, redakteur, autor, verlag, druckerei, zeitung, epaper, computer, roboter, quantencomputer, ki];

clickButton.addEventListener("click", () => {
  score += wpc;
  gesamtklicks += 1;
  scoreDisplay.textContent = Math.floor(score);
});

schreibgeraetbutton.addEventListener("click", () => {
  if (schreibgeraetdisplay.innerHTML.includes(schreibgeraeteList[schreibgeraeteList.length-1][0])) {
  } else {
    for (let index = 0; index < schreibgeraeteList.length; index++) {
      if (schreibgeraetdisplay.innerHTML.includes(schreibgeraeteList[index][0])) {
        if (score >= schreibgeraeteList[index+1][1]) {
          score -= schreibgeraeteList[index+1][1];
          schreibgeraetdisplayelements[0].innerHTML =  schreibgeraeteList[index+1][0] + " ("+schreibgeraeteList[index+1][2]+")";
          if (index + 1 == schreibgeraeteList.length - 1) {
            schreibgeraetdisplayelements[1].innerHTML = "Alle Schreibgeräte upgegraded";
            schreibgeraetdisplayelements[2].innerHTML = "Kein weiteres Upgrade mehr möglich"
            nextschreibgeraetPrice = null
          } else {
            schreibgeraetdisplayelements[1].innerHTML = "Nächstes Upgrade: " + schreibgeraeteList[index+2][0] + " ("+schreibgeraeteList[index+2][2]+")"
            schreibgeraetdisplayelements[2].innerHTML = "Preis: " + schreibgeraeteList[index+2][1];
            nextschreibgeraetPrice = schreibgeraeteList[index+2][1];
          } 
          wpc = schreibgeraeteList[index+1][2];
          document.getElementById("wpc").innerHTML = wpc;
          break;
        }
      }   
    }
  } 
});

farbe = ["#8b4513", "#ee7621", "#708090", "#ffc125", "#4876ff", "#333333"];
gesamtworter = ["Ein paar Zeilen… (100 Wörter)", "Erste Geschichte geschrieben (500 Wörter)", "Kleines Buch voll! (2000 Wörter)", "Roman beendet (10.000)", "Wort-Millionär!!! (1.000.000)"];
wortprosekunde = ["Ein Tropfen Text (10 Wps)", "Jetzt läuft`s langsam (100 Wps)", "Wörterfluss! (1000 Wps)", "Schreibmaschine 2.0 (5.000)", "Text-Tsunami!!!! (100.000)"];
wortproklick = ["Mit Bleistift geschrieben (10 Wpk)", "Fingerübungen (100 Wpk)", "Klick-Künstler (1.000 Wpk)", "Klick-Genie (10.000)", "Ein Klick=ein Kapitel! (100.000)"];
gesamtklick = ["10 Klicks! Immerhin… (10)", "100 Klicks!!! (100)", "1.000 Klicks - Autoklicker?! (1000)", "10.000 Klicks - Clickmaster (10.000)", "100.000 Klicks - Wahnsinn! (100.000)"]

info_ges = [[0,50,100],[0,200,500],[1,10,2000],[0,5000,10000],[1,10000,1000000]];
info_wps = [[1,2,10], [0,1000,100], [0,10000,1000],[1,1000,5000],[0, 1000000, 100000]];
info_wpk = [[0,50,10],[0,1000,100],[1,500,1000],[0, 100000, 10000],[1, 100000, 100000]];
info_gek = [[0,5,10],[0,100,100],[0, 2000, 1000],[1,1000, 10000],[0, 10000000, 100000]];

class Achievements {
  constructor(name, type, info){
    this.name = name;
    this.type = type;
    this.klasse = 0;
    this.info = info;
    this.condition = info[this.klasse][2];
    this.reward = info[this.klasse][0];
    this.increase = info[this.klasse][1];
    this.button = document.createElement("button");
    this.buttontext = document.createTextNode(this.name[this.klasse]);
    this.text = this.button.appendChild(this.buttontext);
    achievements.appendChild(this.button);    
    this.button.addEventListener("click", () => {
      this.purchase()
    });
  }
  purchase() {
    if (this.typ() >= this.condition) {
      this.klasse += 1;
      if (this.klasse > 4){
        this.button.innerHTML = "GEMEISTERT";
        this.button.disabled = true;
      }
      else{
        this.button.innerHTML = this.name[this.klasse];
        this.reward = this.info[this.klasse][0];
        this.increase = this.info[this.klasse][1];
        this.condition = this.info[this.klasse][2];
      }
    }
  }
  colorUpdate(){
    if (this.typ() >= this.condition){
      this.button.style.background = farbe[this.klasse];
    }
    if (this.typ() < this.condition){
      this.button.style.background = "white";
    }
  }  
  typ(){
    if (this.type == 0){
      return score;
    }
    if (this.type == 1){
      return wps;
    }
    if (this.type == 2){
      return wpc;
    }
    else{
      return gesamtklicks;
    }
  }
}

const geswort = new Achievements(gesamtworter, 0, info_ges);
achievements.appendChild(document.createElement("p"));
const wwps = new Achievements(wortprosekunde, 1, info_wps);
achievements.appendChild(document.createElement("p"));
const wwpk = new Achievements(wortproklick, 2, info_wpk);
achievements.appendChild(document.createElement("p"));
const gesklick = new Achievements(gesamtklick, 3, info_gek);
const achieve = [geswort, wwps, wwpk, gesklick];

const counter = setInterval(() => {
  score = score + wps;
  scoreDisplay.textContent = Math.floor(score);
}, 1000);

const updateButtons = setInterval(() => {
  for (const ach of achieve){
    ach.colorUpdate();
  }
  for (const upgrade of upgradesList){
    upgrade.colorUpdate();
  }
  if (score >= nextschreibgeraetPrice){
    schreibgeraetdisplay.style.background = "green";
  }
  if (score < nextschreibgeraetPrice && schreibgeraetdisplay.style.background === "green"){
    schreibgeraetdisplay.style.background = "red";
  }
  if (nextschreibgeraetPrice == null){
    schreibgeraetdisplay.style.background = "grey";
  }
}, 100);