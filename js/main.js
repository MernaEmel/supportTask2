// let value=document.getElementsByClassName("count");
// setTimeout(counterr(value),3000);

let myFACULTY =document.querySelector("#faculty");
// myVisitor.onload= function(){
//     for(let i=0;i<24;i++){
        
//     }
// }
let counter1=0;
setInterval(()=>{
    if (counter1<24){
        myFACULTY.innerHTML=counter1;
        counter1++;
        
    }
   
    
},100)
let myVisitor= document.querySelector("#visitor");
let counter2=2024550;
setInterval(()=>{
    if (counter2<2024780){
        myVisitor.innerHTML=counter2;
        counter2++;
    }
},10)
let myUNDERGRADUATE= document.querySelector("#undergraduate");
let counter3=297200;
setInterval(()=>{
    if (counter3<297429){
        myUNDERGRADUATE.innerHTML=counter3;
        counter3++;
    }
},10)
let myPOSTGRADUATE= document.querySelector("#postgraduate");
let counter4=54400;
setInterval(()=>{
    if (counter4<54597){
        myPOSTGRADUATE.innerHTML=counter4;
        counter4++;
    }
},10)


