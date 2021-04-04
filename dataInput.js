let add = document.getElementById("Success");
let neutral = document.getElementById("Fail");

let int = document.getElementById("Score"); //int is my score
let int_int = document.getElementById("Attempt");

let integer = 0; //score
let repetionCount = 10;



add.addEventListener('click', function(){
    if(repetionCount > 0){
    integer += 1;
    int.innerHTML = integer;
    repetionCount -= 1;
    int_int.innerHTML = repetionCount;
    }
    else{
    integer = integer;
    int.innerHTML = integer;
    repetionCount = repetionCount;
    int_int.innerHTML = repetionCount;
    result(integer);
    
    }
    })

neutral.addEventListener('click', function(){
    if(repetionCount > 0){
    integer = integer;
    int.innerHTML = integer;
    repetionCount -= 1;
    int_int.innerHTML = repetionCount;
    }
    else{
    integer = integer;
    int.innerHTML = integer;
    repetionCount = repetionCount;
    int_int.innerHTML = repetionCount;
    result(integer);
    }
    })

function result(integer){



const scores = JSON.parse(localStorage.getItem("TrainingScores")) || [];

scores.push(integer);

localStorage.setItem("TrainingScores", JSON.stringify(scores));

}