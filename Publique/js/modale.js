const modale = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


console.log(span);

btn.onclick = function() {
  modale.style.display = "block";
}

span.onclick = function() {
  console.log("span cliqué");
  modale.style.display = "none";
}

//sert a appuiyer n'importe ou pour fermer la modale
window.onclick = function(event) {
  if (event.target == modale) {
    modale.style.display = "none";
  }
}