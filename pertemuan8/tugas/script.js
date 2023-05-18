var para = document.getElementById("align-para");
var para2 = document.getElementById("kickstart-para");

function takeAction() {
  alert("I am taking action!");
}

function edit() {
  para.innerHTML =
    `<form><textarea name="" id="edited-text" cols="20" rows="4">` +
    para2.innerText +
    `</textarea><button type="submit" class="btn-edit" onclick="saveEdit()">Save Edit</button>
  </form>`;
}

function saveEdit() {
  para.textContent = document.getElementById("edited-text").value;
}

function submit() {
  console.log("KKKKKK");
  var name = document.getElementById("input-name").value;
  var name = document.getElementById("input-email").value;
  var name = document.getElementById("input-message").value;
}

var form = document.getElementById("formId");
function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener("submit", submitForm);
