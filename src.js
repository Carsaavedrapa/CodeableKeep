const createNewNote = document.getElementById("add-target");

// CREAR NOTAS

function createNoteBox() {
  const noteBox = document.createElement("div");
  noteBox.style.justifyContent = "center";
  noteBox.id = "note-box";
  noteBox.style.background = "red";
  noteBox.style.width = "250px";
  noteBox.style.minHeight = "300px";

  const noteTitleElement = noteTitle();
  const noteBodyElement = noteBody();
  const deleteNoteButton = deleteNoteBtn();

  createNote(noteBox, noteTitleElement, noteBodyElement, deleteNoteButton);
}

function noteTitle() {
  const title = document.createElement("h1");
  title.id = "note1";
  title.innerHTML = "Título de la Nota";
  title.style.display = "flex";
  title.style.flexDirection = "row";
  title.style.justifyContent = "center";
  return title;
}

function noteBody() {
  const body = document.createElement("p");
  body.id = "body1";
  body.innerHTML = "¡Este es tu texto!";
  body.style.display = "flex";
  body.style.flexDirection = "row";
  body.style.justifyContent = "center";
  return body;
}

function deleteNoteBtn() {
  const button = document.createElement("button");
  button.id = "delete-btn";
  button.innerHTML = "Eliminar Nota";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.addEventListener("click", deleteNote);
  return button;
}

function createNote(noteBox, title, body, deleteButton) {
  noteBox.append(title);
  noteBox.append(body);
  noteBox.append(deleteButton);
  document.body.append(noteBox);
}

createNewNote.addEventListener("click", createNoteBox);

// FUNCIÓN PARA ELIMINAR NOTAS

function deleteNote() {
  const element = document.getElementById("note-box");
  element.remove();
}
