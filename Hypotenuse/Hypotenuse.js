const sideA=document.querySelector(".value-of-a");
const sideB=document.querySelector(".value-of-b");
const button= document.querySelector(".btn");
const message=document.querySelector("#output-msg");

button.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse(){
    const a=Number(sideA.value);
    const b=Number(sideB.value);
    if(a && b){
        if(a>0 && b>0){
            const hypotenuse=Math.sqrt(a*a +b*b);
        message.innerText=`The of hypotenuse is ${hypotenuse}.`;
     } else{
        message.innerText="values should be positive.";
       }
    }
    else{
        message.innerText="Please enter the values of both the field.";
}
}

