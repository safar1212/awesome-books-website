let books = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : [];

let booksContainer = document.getElementById("books-container");
const addBookForm = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");

const reload = () => {
  booksContainer.innerHTML = books
    .map((bookItem, index) => {
      return `<p>${bookItem.title}</p>
      <p>${bookItem.author}.</p>
      <button onclick="removeBook(${index})">Remove</button>
      <hr>`;
    })
    .join("");
};

reload();

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);

  localStorage.setItem("books", JSON.stringify(books));

  reload();
});

const removeBook = (bookIndex) => {
  books = books.filter((item, index) => {
    if (index !== bookIndex) {
      return item;
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
  reload();
};
