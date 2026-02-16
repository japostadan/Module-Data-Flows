let myLibrary = [];

// When page loads → populate default books and render
window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);

    // 🔧 FIX: render is already called on load,
    // but keeping this ensures it updates after populating
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  // 🔧 FIX: Added author validation (was missing before)
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill all fields!");
    return;
  }

  // 🔧 FIX: Author was incorrectly set as title before
  let book = new Book(title.value, author.value, pages.value, check.checked);

  // 🔧 FIX: Was using "library.push" (wrong variable name)
  myLibrary.push(book);

  render();

  // 🔧 Improvement: Clear form after submission
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;

  // 🔧 FIX: Missing ")" caused entire script to fail
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  let length = myLibrary.length;

  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";

    // 🔧 FIX: Logic was reversed before
    changeBut.innerText = myLibrary[i].check ? "Yes" : "No";

    wasReadCell.appendChild(changeBut);

    // Toggle read status
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    let delButton = document.createElement("button");

    // 🔧 FIX: Variable name was incorrect (delBut vs delButton)
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";

    deleteCell.appendChild(delButton);

    // 🔧 FIX: Event name was "clicks" (invalid)
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
