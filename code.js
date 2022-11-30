function countdownTimer() {
    //countdownTimer will go from 20 to 0 by 2s
    console.log("countdownTimer() started");
}

function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;

    //check if craps (7 or 11)


    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("you lose!!!!!!!!!");
        document.getElementById("gameRes").innerHTML = "You did find victory. Please play again and WIN!";
        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!!!!!");
        document.getElementById("gameRes").innerHTML = "You won!!!!";
        //check for tie
    } else {
        console.log("You did not win or lose.");
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";
    }
}

//btrCountdownTimer() created to fulfil assignment Assignment: Efficiency at Mission Control
function btrCountdownTimer() {
    console.log("btrCountdownTimer() started");
    var currTime = 20;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            }
            currTime = currTime - 2;
        }, i * 2000)
    }
}

function chgBtrCountdownTimer() {
    console.log("chgBtrCountdownTimer() started");
    var currTime = 20;
    var ogCurrTime = currTime;

    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            if (currTime == 0){
                //less than 1/2 left
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            } else if (currTime < 0.5 * ogCurrTime){
                //when we finishing counting down
                document.getElementById("countDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " seconds";
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime - 2;
        }, i * 2000)
    }
}

function startFun(){
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable (disable!) stop button
    document.getElementById("stopButton").disabled = false;

    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";

    //run updateDisplay()

    timer = setInterval(updateDisplay, time_interval);
}

function stopFun(){
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;

    //enable (disable!) start button
    document.getElementById("startButton").disabled = false;

    clearInterval(timer);
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playBowie(){
    console.log("playBowie() started");
    mySound2 = new sound("David-Bowie-Space-Oddity.mp3");
    mySound2.play();
}