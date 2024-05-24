document.addEventListener("DOMContentLoaded", function() {
  const addTarget = document.getElementById("add-target");

  addTarget.addEventListener("click", createNote);

  function createNote() {
      const uniqueId = Date.now().toString();

      const createNoteBox = document.createElement("div");
      createNoteBox.style.justifyContent = "center";
      createNoteBox.id = `note-box-${uniqueId}`;
      createNoteBox.className = "note-box";
      createNoteBox.style.background = "red";
      createNoteBox.style.width = "250px";
      createNoteBox.style.minHeight = "300px";

      const noteTitleInput = document.createElement("input");
      noteTitleInput.className = "note-title-input";
      noteTitleInput.type = "text";
      noteTitleInput.placeholder = "Enter note title";
      noteTitleInput.style.display = "block";
      noteTitleInput.style.margin = "10px auto";

      const noteBodyInput = document.createElement("textarea");
      noteBodyInput.className = "note-body-input";
      noteBodyInput.placeholder = "Enter note body";
      noteBodyInput.style.display = "block";
      noteBodyInput.style.margin = "10px auto";

      const saveBtn = document.createElement("button");
      saveBtn.className = "save-btn";
      saveBtn.innerHTML = "Save";
      saveBtn.style.display = "block";
      saveBtn.style.margin = "10px auto";
      saveBtn.addEventListener("click", function(event) {
          event.preventDefault(); // Evitar el comportamiento predeterminado del botón
          saveNote(createNoteBox);
      });

      createNoteBox.appendChild(noteTitleInput);
      createNoteBox.appendChild(noteBodyInput);
      createNoteBox.appendChild(saveBtn);

      document.body.appendChild(createNoteBox);
  }

  function saveNote(noteBox) {
      const titleInput = noteBox.querySelector(".note-title-input").value;
      const bodyInput = noteBox.querySelector(".note-body-input").value;

      const noteTitle = document.createElement("h1");
      noteTitle.className = "note-title";
      noteTitle.innerHTML = titleInput;

      const noteBody = document.createElement("p");
      noteBody.className = "note-body";
      noteBody.innerHTML = bodyInput;

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.innerHTML = "Edit";
      editBtn.style.display = "block";
      editBtn.style.margin = "10px auto";
      editBtn.addEventListener("click", function() {
          editNote(noteBox);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "Delete";
      deleteBtn.style.display = "block";
      deleteBtn.style.margin = "10px auto";
      deleteBtn.addEventListener("click", function() {
          deleteNote(noteBox);
      });

      noteBox.innerHTML = ""; // Clear existing content
      noteBox.appendChild(noteTitle);
      noteBox.appendChild(noteBody);
      noteBox.appendChild(editBtn);
      noteBox.appendChild(deleteBtn);
  }

  function editNote(noteBox) {
      const noteTitle = noteBox.querySelector(".note-title");
      const noteBody = noteBox.querySelector(".note-body");

      const noteTitleInput = document.createElement("input");
      noteTitleInput.className = "note-title-input";
      noteTitleInput.type = "text";
      noteTitleInput.value = noteTitle.innerHTML;
      noteTitleInput.style.display = "block";
      noteTitleInput.style.margin = "10px auto";

      const noteBodyInput = document.createElement("textarea");
      noteBodyInput.className = "note-body-input";
      noteBodyInput.value = noteBody.innerHTML;
      noteBodyInput.style.display = "block";
      noteBodyInput.style.margin = "10px auto";

      const saveEditBtn = document.createElement("button");
      saveEditBtn.className = "save-edit-btn";
      saveEditBtn.innerHTML = "Save Edit";
      saveEditBtn.style.display = "block";
      saveEditBtn.style.margin = "10px auto";
      saveEditBtn.addEventListener("click", function() {
          saveEdit(noteBox, noteTitleInput, noteBodyInput);
      });

      noteBox.innerHTML = ""; // Clear existing content
      noteBox.appendChild(noteTitleInput);
      noteBox.appendChild(noteBodyInput);
      noteBox.appendChild(saveEditBtn);
  }


  function saveEdit(noteBox, titleInput, bodyInput) {
      const noteTitle = document.createElement("h1");
      noteTitle.className = "note-title";
      noteTitle.innerHTML = titleInput.value;

      const noteBody = document.createElement("p");
      noteBody.className = "note-body";
      noteBody.innerHTML = bodyInput.value;

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.innerHTML = "Edit";
      editBtn.style.display = "block";
      editBtn.style.margin = "10px auto";
      editBtn.addEventListener("click", function() {
          editNote(noteBox);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "Delete";
      deleteBtn.style.display = "block";
      deleteBtn.style.margin = "10px auto";
      deleteBtn.addEventListener("click", function() {
          deleteNote(noteBox);
      });

      noteBox.innerHTML = ""; // Clear existing content
      noteBox.appendChild(noteTitle);
      noteBox.appendChild(noteBody);
      noteBox.appendChild(editBtn);
      noteBox.appendChild(deleteBtn);
  }

  function deleteNote(noteBox) {
      noteBox.remove();
  }
});

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
