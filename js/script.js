// document.getElementById("demo").innerHTML="Hello world";

//border playing

// document.getElementById("demo").style.borderLeft="solid 2px #ff0000";
// document.getElementById("demo").style.borderRight="solid 2px #00ffff";
// document.getElementById("demo").style.borderTop="solid 2px #000fff";
// document.getElementById("demo").style.borderBottom="solid 2px #593ebc";
// document.getElementById("demo").style.border="solid 2px #ff0000";

//font playing

//document.getElementById("demo").style.fontWeight="bold"; //font bold
//document.getElementById("demo").style.fontStyle="italic"; //font italic
//document.getElementById("demo").style.textDecoration="underline"; //font enderline
//document.getElementById("demo").style.color="#ff0000"; //font color
//document.getElementById("demo").style.backgroundColor="#000"; //background color

//document.getElementsByClassName("aa")[0].style.border="solid 5px #ff0000";

//document.getElementsByTagName("p")[0].style.border="solid 3px #ff0000";

// document.querySelector(".aa").style.fontWeight="bolld";
// document.querySelectorAll(".aa")[1].style.fontStyle="italic";
// document.querySelectorAll(".aa")[2].style.textDecoration="italic";


// function changeColor(){
//     document.querySelector("body").style.backgroundColor="#00ffff";
//     document.querySelector("body").style.color="#fff";

// }
//document.getElementById("text").style.display="none";

//function myFunction(){
  //  let checkbox = document.getElementById("my check");
    //let text = document.getElementById("text");
    
    //if(checkbox.checked===true){
    //text.style.display="block";
//}
//else{
  //  text.style.display="none";
//}
//}

// function checkGender(){
//     if(document.getElementById("fr").rsex[0].checked){
//         let male = document.getElementById("fr").rsex[0].value;
//         alert("you have selected"+male);
//     }else{
//         let female = document.getElementById("fr").rsex[1].value;
//         alert("you have selected"+female);
//     }

// let a = prompt("enter your name","");
//     document.getElementById("demo").innerHTML = "Welcome"+a;
// function myfunction(){
//     document.getElementById("cimg").src="vd/icons8-facebook-48 (1).png";
// }
let body = document.body;
// let theme = document.cookie.includes('light') ? 'light' : 'dark';
let theme = document.cookie.includes('dark') ? 'dark' : 'light';

body.className = theme;

function changetheme(){
    let newTheme = body.className === 'light' ? 'dark' : 'light';
    body.className = newTheme;
    document.cookie = `theme= $(newTheme);path=/;max-age=$(60*60*24)`;
}