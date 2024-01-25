// This function reloads the current page when called, effectively acting as a "go back" action.
function goBack() {
    'use strict';
    window.location.reload();
}

// This function populates the 'quiz_area_box' element with quiz rules and instructions.
function rules() {
    "use strict";
    // Get the element with the id 'quiz_area_box'
    let rulesAreabox = document.getElementById("quiz_area_box");
    // Check if the 'quiz_area_box' element exists
    if (rulesAreabox) {
        // If it exists, set its innerHTML to the specified content
        rulesAreabox.innerHTML = `
            <div><h1 id="headline_rules" class="heading">How To Survive the Jungle Quiz Safari!</h1></div>
            <div class="quiz-button">
                <p>A fun and fact-filled questionnaire that will challenge your knowledge about the chemistry we are surrounded with.</p>
                <p>This quiz consists of Multiple Choice Questions. Use your best guess and click on the answer.</p>
                <p>Right answers will appear green and wrong ones in red. Scores will appear right away.</p>
                <p>Ready to challenge yourself?</p>
                <button id="back_btn" class="button" aria-label="back" onclick="goBack()">Back</button>
            </div>
        `;
    }
}

    function start() {
        "use strict";
        let startAreabox = document.getElementById("quiz_area_box");
        if (startAreabox) {
            startAreabox.innerHTML = `
                <div><h1 id="headline_questions" class="heading">How To Survive the Jungle Quiz Safari!</h1></div>
                <div class="quiz-button">
                    <p>A fun and fact-filled questionnaire that will challenge your knowledge about the chemistry we are surrounded with.</p>
                    <p>This quiz consists of Multiple Choice Questions. Use your best guess and click on the answer.</p>
                    <p>Right answers will appear green and wrong ones in red. Scores will appear right away.</p>
                    <p>Ready to challenge yourself?</p>
                    <button id="timer" class="button" aria-label="timer">6</button>
                    <br>
                    <button id="start_timer" class="button" aria-label="timer" onclick="goBack()">Home</button>
                </div>
            `;
            
            // Get the timer element
            let timerElement = document.getElementById("timer");

            // Get the start timer button element
        let startTimerButton = document.getElementById("start_timer");
  
            // Set the initial time
            let currentTime = parseInt(timerElement.innerHTML);

            // Define the countdown function
            function countdown() {
                currentTime--; // Decrement the current time by 1
                timerElement.innerHTML = currentTime; // Update the timer display

                // If countdown reaches 0, stop the timer
                if (currentTime <= 0) {
                    clearInterval(intervalId);
                    timerElement.innerHTML = "Time's up!";
                    startTimerButton.style.display = "block";

                }
            }

            // Call the countdown function every second (1000 milliseconds)
            const intervalId = setInterval(countdown, 1000);
        }
    }
    


