function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, give feedback and stop
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 3: Compare user's answer and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
