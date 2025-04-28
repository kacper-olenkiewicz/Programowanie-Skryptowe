let score = 0;
let q = 0;
const questions = [
    ['Stolica Polski to?', 'Warszawa'],
    ['2 + 2 = ?', '4'],
    ['Kolor nieba w słoneczny dzień to?', 'Niebieski']
];

function nextQuestion() {
    document.getElementById("komunikat").textContent = ""; // Czyść komunikat
    document.getElementById("odpowiedz").value = ""; // Czyść pole odpowiedzi
    if (q < questions.length) {
        document.getElementById("pytanie").textContent = questions[q][0];
    } else {
        showScore();
    }
}

function checkAnswer() {
    const answer = document.getElementById("odpowiedz").value;
    const komunikat = document.getElementById("komunikat");
    if (answer.trim().toLowerCase() === questions[q][1].toLowerCase()) {
        score++;
        komunikat.style.color = "green";
        komunikat.textContent = "Brawo! To poprawna odpowiedź!";
    } else {
        komunikat.style.color = "red";
        komunikat.textContent = "Niestety, to nie jest poprawna odpowiedź. Prawidłowa odpowiedź to: " + questions[q][1] + ".";
    }
    q++;
    setTimeout(nextQuestion, 1800); // Po 1.8 sekundy przejdź do następnego pytania
}

function showScore() {
    document.getElementById("komunikat").textContent = ""; // Czyść komunikat
    const wynik = 'Twój wynik: ' + score + ' / ' + questions.length + ' punktów.';
    document.getElementById("projekt1").innerHTML = '<h2 style="font-size:2em; color:#007bff;">' + wynik + '</h2>';
}

window.onload = nextQuestion;
