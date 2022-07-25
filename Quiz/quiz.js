const quizform= document.querySelector('.quiz-form');
const submit=document.querySelector('.btn');
const message=document.querySelector('#output-msg');

const correctAns= ['90°', 'right angled']

submit.addEventListener('click', calculatescore);

function calculatescore(){
    let score =0;
    let index=0;
    const formResults=new FormData(quizform);
    
    for(let value of formResults.values()){
    if(value === correctAns[index]){
        score++;
    }
    index++;
}
message.innerText=`Your score is ${score}.`
}