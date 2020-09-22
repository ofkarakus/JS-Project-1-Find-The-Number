document.getElementById("btn").addEventListener("click", guessNum)

let num = randomInteger(0,100);
let counter = 1;

function guessNum() {
    let guess = document.getElementById("number").value;

    if (guess.length == 0) {
        document.getElementById("message").innerHTML = "Please input a value";
        playSound()
        return
    } else if (isNaN(guess)) {
        document.getElementById("message").innerHTML = 'Enter a number, please!'
        playSound()
    } else if (guess < num) {
        document.getElementById("message").innerHTML = 'Guess higher!'
        playSound()
    } else if (guess > num) {
        document.getElementById('message').innerHTML = 'Guess lower!';
        playSound()
    } else {
        
        playSoundSuccess()
        
        alert(`Congrats! You guessed the number on the ${counter}. try.`)
        
        if (confirm('You wanna play again?')) {
            location.reload();
        } else {
            alert('Thanks for game! Bye Bye!')
            close()
        }
    }    

    document.getElementById('testNum').innerHTML = 'Test Number : ' + counter;
    counter +=1;
}


//? functions 

function playSoundNo() {
    let sound = document.getElementById('error-1');
    sound.play();
}

function playSoundNoNoNo() {
    let sound = document.getElementById('error-2');
    sound.play();
}

function playSoundPat() {
    let sound = document.getElementById('error-3');
    sound.play();
}

function playSoundSuccess() {
    let sound = document.getElementById('success');
    sound.play();
}

function playSound() {
    if (counter % 5 == 0) {
        playSoundPat()
    } else if (counter % 3 == 0) {
        playSoundNoNoNo()
    } else {
        playSoundNo()
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}