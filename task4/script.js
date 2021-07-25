const link = document.getElementById("link");

function changeText(e){ 
    link.textContent=prompt();
    e.preventDefault();
}

link.addEventListener("click",changeText);
