let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById('score-home')
let guestScoreEl = document.getElementById('score-guest')

let newGame = document.getElementById('new-game')

function updateScoreEl() {
    const colorWining = '#F59E0B';
    const colorDefault = '#10B981'
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;

    if (homeScore > guestScore) {
        homeScoreEl.style.color = colorWining; 
        guestScoreEl.style.color = colorDefault;
    } else if(guestScore > homeScore) {
        homeScoreEl.style.color = colorDefault; 
        guestScoreEl.style.color = colorWining;
    } else {
        homeScoreEl.style.color = colorDefault; 
        guestScoreEl.style.color = colorDefault;
    }
}

function incrementHomeScoreByOne() {
    homeScore += 1;
    updateScoreEl()
}

function incrementHomeScoreByTwo() {
    homeScore += 2;
    updateScoreEl()
}

function incrementHomeScoreByThree() {
    homeScore += 3;
    updateScoreEl()
}

function incrementGuestScoreByOne() {
    guestScore += 1;
    updateScoreEl()
}

function incrementGuestScoreByTwo() {
    guestScore += 2;
    updateScoreEl()
}

function incrementGuestScoreByThree() {
    guestScore += 3;
    updateScoreEl()
}

function setNewGame() {
    homeScore = 0;
    guestScore = 0;
    updateScoreEl();
}