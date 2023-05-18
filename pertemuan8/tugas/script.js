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
