document.addEventListener("DOMContentLoaded", function () {
    // Add 8 clue input fields dynamically
    for (let i = 1; i <= 8; i++) {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Clue " + i);
        document.getElementById("clues-container").appendChild(input);
    }
});

function checkClues() {
    const clueInputs = document.querySelectorAll("#clues-container input");
    let correctCount = 0;
    let wrongCount = 0;

    clueInputs.forEach((input, index) => {
        // Assume the correct answer for each clue is "correct"
        const correctAnswer = "correct";
        const userAnswer = input.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    // Update the result in the HTML
    document.getElementById("correct-count").innerText = correctCount;
    document.getElementById("wrong-count").innerText = wrongCount;
}
