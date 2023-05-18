function takeAction() {
  alert("I am taking action!");
}

function editAlign() {
  var kickstart = document.getElementById("kickstart-text").innerText;
  var textarea = `<form><textarea name="" id="" cols="20" rows="5">${kickstart}</textarea><button type="submit" onclick="saveEdit()">Save Edit</button>
  </form>`;
  console.log(document.getElementById("align-text").innerHTML);
  document.getElementById("align-text").innerHTML = textarea;
  console.log(document.getElementById("align-text").innerHTML);
}

function saveEdit() {
  console.log(document.getElementById("align-text").innerHTML);
  // var currentText = document.getElementById("edited-text").value;
  // document.getElementById("align-text").innerHTML = `<p>${currentText}</p>`;
}
