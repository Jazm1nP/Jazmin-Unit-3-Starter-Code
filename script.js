/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let opening=document.querySelector(".story-opening");
let allButtons=document.querySelector(".buttons");
let endOptionOne=document.querySelector(".option-one-end");
let endOptionTwo=document.querySelector(".option-two-end");
let alien=document.querySelector(".alien");
let lastPic=document.querySelector(".last");
let continueOne=document.querySelector(".continueOne");
let continueTwo=document.querySelector(".continueTwo");
let changeName=document.querySelector(".changeName");
let titleDiv=document.querySelector(".title");

buttonOne.onclick=function(){
  optionOneScreen.style.display="block";
  opening.style.display="none";
  allButtons.style.display="none";
};

buttonTwo.onclick=function(){
  optionTwoScreen.style.display="block";
    opening.style.display="none";
  allButtons.style.display="none";

};

continueOne.onclick=function(){
  endOptionOne.style.display="block";
  optionOneScreen.style.display="none";
};

continueTwo.onclick=function(){
  endOptionTwo.style.display="block";
  optionTwoScreen.style.display="none";
};

changeName.onclick=function(){
  titleDiv.innerHTML="Tu Juego";
}



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
