
// 4 crystals random results...
// individual crystals different numbers 1-12
// new number should be generated everytime
// win lose optionis
// add everytime you hit a diff crystal
// if greater than win option we take one away
// if equal we add one


$(document).ready(() => {
// random number
    let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    // 4 stones
    let amethyst = Math.floor(Math.random() * 12) + 1;
    let emld = Math.floor(Math.random() * 12) + 1;
    let ruby = Math.floor(Math.random() * 12) + 1;
    let sapphire = Math.floor(Math.random() * 12) + 1;

    // score
    let wins = 0; //#wins
    let losses = 0;  //#losses

    // starting score 
    let totScore = 0;
    $('#totScore').text(totScore);

    // win functions
    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    // lose function
    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }


    // stones attr.


    $('#amethyst').click(() => {
        totScore = totScore + amethyst
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#emld').click(() => {
        totScore = totScore + emld;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#ruby').click(() => {
        totScore = totScore + ruby;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#sapphire').click(() => {
        totScore = totScore + sapphire;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    //game restarts 
    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randNum').html(randNumber);
        amethyst = Math.floor(Math.random() * 12) + 1;
        emld = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
    }
});