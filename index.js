class Books {
  constructor() {
    this.books = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
  }

  addBook(book) {
    this.books.push(book);

    localStorage.setItem("books", JSON.stringify(this.books));
  }

  removeBook(bookIndex) {
    this.books = this.books.filter((item, index) => {
      if (index !== bookIndex) {
        return item;
      }
      return undefined;
    });
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

let allBooks = new Books();

const booksContainer = document.getElementById("books-container");
const addBookForm = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");

const reload = () => {
  booksContainer.innerHTML = allBooks.books
    .map(
      (bookItem, index) => `<p>${bookItem.title}</p>
      <p>${bookItem.author}.</p>
      <button onclick="removeBook(${index})">Remove</button>
      <hr>`
    )
    .join("");
};

reload();

console.log(allBooks.books);

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);

  reload();
});
/* eslint-disable no-unused-vars */
const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};
/* eslint-disable no-unused-vars */
