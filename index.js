const addButton = document.querySelector("#addButton"); 
const todoList = document.querySelector(".toDoList"); 
const input = document.querySelector("#input"); 

let notes = [];

function addNote() {
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  location.reload();
  return false;
}

function getNotes() {
	if (JSON.parse(localStorage.getItem("notes")) !== null) {
			notes = JSON.parse(localStorage.getItem("notes"));
			for (let i = 0; i < notes.length; i++) {
				noteCreate(notes[i]);
				}
			}
	}

function noteCreate(e) {
	const note = document.createElement("div");
	const newContent = document.createElement("div");
	const del = document.createElement("div");
	note.classList.add("note");
	newContent.classList.add("newContent");
	del.classList.add("del");

	del.addEventListener("click", () => {
		deleteOleg(i);
	});

	const newContentNote = document.createTextNode(e);
	const delContent = document.createTextNode("x");
	newContent.appendChild(newContentNote);
	del.appendChild(delContent);
	note.appendChild(newContent);
	note.appendChild(del);
	todoList.appendChild(note);
}

const deleteOleg = (i) => {
    notes.splice(i, 1); 
    localStorage.setItem("notes", JSON.stringify(notes));
    location.reload();
    return false;
}; 

getNotes();
addButton.addEventListener("click", addNote);

