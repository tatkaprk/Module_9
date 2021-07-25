const inputText=document.getElementById("inputText");
const duplicateField=document.getElementById("duplicateField");
const submit=document.getElementById("submit");

function copyText(){
    duplicateField.textContent=inputText.value;
    console.log(duplicateField.textContent);
}


function sendInfo(e){
    console.log(duplicateField.textContent);
    duplicateField.textContent="";
    inputText.value="";
    e.preventDefault();
}


inputText.addEventListener("keyup", copyText);
submit.addEventListener("click", sendInfo);
