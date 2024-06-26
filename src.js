//KEEPABLE SOURCE CODE

document.addEventListener("DOMContentLoaded", function() {
  const addTarget = document.getElementById("add-target");

  addTarget.addEventListener("click", createNote);

// 1-CREATE NOTE FUNCTIONALITIES

//1.1 CREATE NOTE 

  function createNote() {
    const uniqueId = Date.now().toString();
    const noteTittle = document.getElementById("noteTitle");
    const noteBody = document.getElementById("noteBody");
    
    if(noteBody.value == ""){
        alert("Im sorry, you didnt write any note!!");
        return
    }
      const createNoteBox = document.createElement("div");
      createNoteBox.style.justifyContent = "center";
      createNoteBox.id = `note-box-${uniqueId}`;
      createNoteBox.className = "note-box";
      createNoteBox.style.background = "white";
      createNoteBox.style.width = "250px";
      createNoteBox.style.minHeight = "250px";
      createNoteBox.style.maxHeight = "250px"
      createNoteBox.style.color ="black"

    const noteBodyValue = document.createElement("p")
    noteBodyValue.className = "note-body";
    noteBodyValue.innerHTML = noteBody.value;

    const noteTitleValue = document.createElement("h1");
    noteTitleValue.className = "note-title";
    noteTitleValue.innerHTML = noteTittle.value || "Sin titulo";


    // Create Save button
    const saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.innerHTML = "Save";
    saveBtn.style.display = "block";
    saveBtn.style.margin = "10px auto";
    saveBtn.addEventListener("click", function() {
        saveNote(createNoteBox);
    });

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = "Edit";
    editBtn.style.display = "block";
    editBtn.style.margin = "10px auto";
    editBtn.addEventListener("click", function() {
        editNote(createNoteBox);
    });

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.display = "block";
    deleteBtn.style.margin = "10px auto";
    deleteBtn.addEventListener("click", function() {
        deleteNote(createNoteBox);
    });

    createNoteBox.append(noteTitleValue);
    createNoteBox.append(noteBodyValue);
    createNoteBox.append(saveBtn);
    createNoteBox.append(editBtn);
    createNoteBox.append(deleteBtn);

    const bodyNote = document.querySelector(".body-note");
    noteTittle.value = "";
    noteBody.value = "";
    document.body.appendChild(createNoteBox);
}


  //SAVE NOTES FUNCTION

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

  //EDIT NOTES FUNCTION

  function editNote(noteBox) {
      const noteTitle = noteBox.querySelector(".note-title");
      const noteBody = noteBox.querySelector(".note-body");

      const noteTitleInput = document.createElement("input");
      noteTitleInput.className = "note-title-input";
      noteTitleInput.type = "text";
      noteTitleInput.value = noteTitle.innerHTML;

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

//SAVE EDIT FUNCTION

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