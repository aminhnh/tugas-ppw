function takeAction() {
  alert("I am taking action!");
}

var kickstart = document.getElementById("kickstart-text");
function editAlign() {
  document.getElementById("align-text").innerHTML =
    document.getElementById("kickstart-text").innerText;
  console.log(document.getElementById("kickstart-text").innerText);
}
