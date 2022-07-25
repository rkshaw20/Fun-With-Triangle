const angles= document.querySelectorAll('.angles');
const button=document.querySelector('.btn');
const message =document.querySelector('#output-msg');

button.addEventListener('click', isTriangle);



function isTriangle(){
    const sum=sumOfAngles(angles[0].value, angles[1].value,angles[2].value);
    if(angles[0].value  && angles[1].value && angles[2].value ){
        if(sum===180){
            message.innerText="Yes, it is a triangle.";
        }else{
            message.innerText="No, it is not a triangle.";
        }
    }else{
        message.innerText="Please enter all in the fields."
    }
}

function sumOfAngles(angle1,angle2,angle3){
    const sum=Number(angle1)+Number(angle2)+Number(angle3);
    return sum;
}