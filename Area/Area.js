const base= document.querySelector('#base');
const height= document.querySelector('#height');
const button =document.querySelector('.btn');
const message =document.querySelector('#output-msg');

button.addEventListener('click', calculateArea);

function calculateArea(){
   if(base.value && height.value){
    //const area = (base.value * height.value) / 2;
      const area=(Number(base.value)*Number(height.value))/2;
     message.innerText=`The area of the triangle is ${area.toFixed(2)} cm².`

   }else{
    message.innerText="Please enter value in all the fields."
   }
}
