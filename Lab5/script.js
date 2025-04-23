const tab = ["Kacper", "Olenkiewicz", 20470];
let ite = 0;

function pokazDane() {
  const output = document.getElementById("output");
  if (ite < tab.length) {
    output.innerHTML += tab[ite] + "<br>";
    ite++;
  } else {
    output.innerHTML += "Pokazano wszystkie elementy<br>";
    ite = 0;
  }
}

const quizowe = [
  "Co jest stolica Polski?", "warszawa",
  "W jakim roku rozpoczela sie II Wojna Swiatowa", "1939",
  "Jaki to pierwiastek chemiczny o symbolu O", "tlen"
];
let it = 0;
let wynik = 0;
const zle = [];

function quizStart() {
  document.querySelector(".quizz").style.display = "block";
  document.querySelector(".btn[onclick='pokazDane()']").style.display = "none";
  document.getElementById("pytanie").textContent = quizowe[it];
}

function quizKontynuuj() {
  const odp = document.getElementById("odp").value.toLowerCase();
  const prawidlowa = quizowe[it + 1].toString().toLowerCase();

  if (odp === prawidlowa) {
    wynik++;
  } else {
    zle.push(it / 2 + 1);
  }

  it += 2;
  document.getElementById("odp").value = "";

  if (it < quizowe.length) {
    document.getElementById("pytanie").textContent = quizowe[it];
  } else {
    document.querySelector(".quizz").style.display = "none";
    const out = document.getElementById("output");
    out.innerHTML += `<br><strong>Twoj wynik to: ${wynik} / ${quizowe.length / 2}</strong><br>`;
    if (zle.length > 0) {
      out.innerHTML += `Źle odpowiedziałeś na pytania nr: ${zle.join(", ")}<br>`;
    }
    it = 0;
    wynik = 0;
    zle.length = 0;
  }
}
