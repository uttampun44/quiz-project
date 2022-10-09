
function right(){
    let answer = document.getElementById('result');
    answer.style.display = "block";
    answer.innerText = "The answer is right";
    answer.style.color = "green";
}
function wrong(){
    let answer = document.getElementById('result');
    answer.style.display = "block";
    answer.innerText = "The answer is incorrect";
    answer.style.color = "red";
}