function goBack() {
    'use strict';
    window.location.reload();
}

function rulesnew() {
    'use strict';
    let rulesNew = document.getElementById('quiz_area_box');
    if (rulesNew) {
        rulesNew.innerHTML = `
            <div><h1 id="headline_home" class="heading">How To Survive the Jungle Quiz Safari!</h1></div>
            <div class="quiz-button">
                <p>A fun and fact-filled questionnaire that will challenge your knowledge about the chemistry we are surrounded with.</p>
                <p>This quiz consists of Multiple Choice Questions. Use your best guess and click on the answer.</p>
                <p>Right answers will appear green and wrong ones in red. Scores will appear right away.</p>
                <p>Ready to challenge yourself?</p>
                <button  id="back_btn" class="button" aria-label="back" onclick="goBack()">Back</button>
            </div>
        `;
    }
}

