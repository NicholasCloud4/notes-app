let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//Created add notes feature
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = ("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
})

//Created delete notes feature
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})