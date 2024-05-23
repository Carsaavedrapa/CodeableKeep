
const addTarget = document.getElementById("add-target")
//console.log(typeof(pressButton))

// CREATE NOTES FUNCTION

function createNote(){
  
  const createNoteBox = document.createElement("div");
    createNoteBox.style.justifyContent = "center"
    createNoteBox.id = "note-box"
    createNoteBox.style.background = "red"
    createNoteBox.style.width = "250px"
    createNoteBox.style.minHeight = "300px"

  const noteTitle = document.createElement("h1")
    noteTitle.id = "note1"
    noteTitle.innerHTML = "Note title"
    noteTitle.style.display = "flex"
    noteTitle.style.flexDirection = "row"
    noteTitle.style.justifyContent = "center"
    
  const noteBody = document.createElement("p")
    noteBody.id = "body1"
    noteBody.innerHTML = "This is your text!!"
    noteBody.style.display = "flex"
    noteBody.style.flexDirection = "row"
    noteBody.style.justifyContent = "center"
  
  const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.id = "delete-btn";
    deleteNoteBtn.innerHTML = "Delete Note";
    deleteNoteBtn.style.display = "flex";
    deleteNoteBtn.style.justifyContent = "center";
  
  deleteNoteBtn.addEventListener("click", deleteNote)


  createNoteBox.append(noteTitle)
  createNoteBox.append(noteBody)
  createNoteBox.append(deleteNoteBtn)

  document.body.append(createNoteBox)

}
addTarget.addEventListener("click", createNote)

// DELETE NOTES FUNCTION

function deleteNote(){
  const element = document.getElementById("note-box");
  element.remove();
}
