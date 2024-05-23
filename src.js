
const addTarget = document.getElementById("add-target")
//console.log(typeof(pressButton))

// CREATE NOTES FUNCTION

function createNote(){
  
  const createNoteBox = document.createElement("div");
  createNoteBox.id = "note-box"

  const noteTitle = document.createElement("h1")
  noteTitle.id = "note1"
  noteTitle.innerHTML = "Note title"
  
  const noteBody = document.createElement("p")
  noteBody.id = "body1"
  noteBody.innerHTML = "This is your text!!"
  
  const deleteNoteBtn = document.createElement("button")
  deleteNoteBtn.innerHTML = "Delete Note"
  
  const target = document.getElementById("note-box");

  deleteNoteBtn.addEventListener("click", deleteNote)

  target.append(noteTitle)
  target.append(noteBody)
  target.append(deleteNoteBtn)

  document.body.append(createNoteBox)

}
addTarget.addEventListener("click", createNote)

// DELETE NOTES FUNCTION

function deleteNote(){
  const element = document.getElementById("note-box");
  element.remove();
}
