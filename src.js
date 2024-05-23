const pressButton = document.getElementsByClassName("bt-mg")
const addTarget = document.getElementById("add-target")
const deleteTarget = document.getElementById("delete-target")
//console.log(typeof(pressButton))

deleteTarget.addEventListener("click", deleteNote)

// CREATE NOTES FUNCTION

function createNote(){
  const h1 = document.createElement("h1")
  h1.id = "note1"
  h1.innerHTML = "The serious poeple"
  const target = document.querySelector(".title");
  target.append(h1)
}
addTarget.addEventListener("click", createNote)

// DELETE NOTE FUNCTION

function deleteNote(){
  const element = document.getElementById("note1");
  element.remove();
}
