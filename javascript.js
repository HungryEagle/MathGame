var playing = false;
var score = 0;
var action;
var timeremaining;
var correctAnswer;
//if we click on start/reset button
document.getElementById('startreset').onclick = 
function(){
    //if we are playing
    if(playing){
        location.reload();//reloading the page
    }
    else{
        //change mode to playing
        playing = true;
        //if not playing
            //set score to 0
        score = 0;
        document.getElementById('scorevalue').innerHTML = score;
        // show countdown box
        show('timeremaining')
        timeremaining = 60;
        //hide gameover box
        hide('gameover')
        //change button to reset
        document.getElementById('startreset').innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        //generate questions and multiple answers
        generateQA();
    }
}

//functions
//Clicking an answer box
for(i=1;i<5;i++){
    window.console.log("HI");
        document.getElementById('box'+i).onclick =
    function(){
        if(playing==true){
            if(this.innerHTML==correctAnswer){
                //correct Answer
                score++;
                document.getElementById('scorevalue').innerHTML = score;
                //show correct box
                hide('wrong');
                show('correct');
                setTimeout(function(){
                    hide('correct');
                },1000);

                //Generate new question
                generateQA();
            }else{
                //wrong answer
                show('wrong');
                hide('correct');
                setTimeout(function(){
                    hide('wrong');
                },1000);
            }
        }
    }
}


//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining-=1;
        document.getElementById('timeremainingvalue').innerHTML=timeremaining;
        if(timeremaining==0){
            clearInterval(action);
            show("gameover")
            document.getElementById('gameover').innerHTML = 
            "<p>Game Over!</p><p>Your score is "+score+".</p>"
            hide("timeremaining")
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000)  
}  

//hides elements
function hide(id){
    document.getElementById(id).style.display="none";
}

//show elements
function show(id){
    document.getElementById(id).style.display="block";
}

function generateQA(){
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    correctAnswer = x*y;
    document.getElementById('question').innerHTML = 
    x + "x" + y;
    var correctPosition = 1 + Math.round(Math.random()*3)
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with the correct answer
    
    //fill other boxes with wrong answers
    var answers = [correctAnswer];

    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1 + Math.round(Math.random()*9))*(1 + Math.round(Math.random()*9));
            }while(answers.indexOf(wrongAnswer)>-1) //pretty nifty
            document.getElementById('box'+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}


                //increase score by 1
                //show correct box for 1 sec
                //generate new Q/A
            //no
                //try again box for 1 sec

