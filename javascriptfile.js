function scoreAndBlock() {
    score();
    block();
}

function score() {
    var score = 0;

    if (document.getElementById('radio1').checked) {
        score += 1;
    }

    if (document.getElementById('radio5').checked) {
        score += 1;
    }

    if (document.getElementById('radio10').checked) {
        score += 1;
    }

    if (document.getElementById('check3').checked) {
        score += 1;
    }

    if (document.getElementById('check6').checked) {
        score += 1;
    }

    document.getElementById('score').textContent = 'Score: ' + score + '/5';
}

function block() {
    var radioElements = document.querySelectorAll('input[type=radio]');
    radioElements.forEach(function(radio) {
        radio.disabled = true;
    });
    
    var checkboxElements = document.querySelectorAll('input[type=checkbox]');
    checkboxElements.forEach(function(checkbox) {
        checkbox.disabled = true;
    });
}

