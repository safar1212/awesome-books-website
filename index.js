class Books {
  constructor() {
    if (localStorage.getItem("books") === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem("books"));
    }
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

const booksContainer = document.getElementById("books-container");
const addBookForm = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");

const allBooks = new Books();

function reload() {
  booksContainer.innerHTML = allBooks.books
    .map(
      (
        bookItem,
        index
      ) => `<div class="book-item"><p><strong>"${bookItem.title}" by ${bookItem.author}.</strong></p>
      <button onclick="removeBook(${index})">Remove</button>
      </div>`
    )
    .join("");
  if(allBooks.books.length === 0) {
    booksContainer.style.cssText = "border: none;";
  } else {
    booksContainer.style.cssText = "border: 3px black solid;";
  }
}

reload();

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = "";
  author.value = "";
  reload();
});
/* eslint-disable no-unused-vars */
const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};
/* eslint-disable no-unused-vars */

const list = document.getElementById('list-menu');
const addNew = document.getElementById('add-new-menu');
const contact = document.getElementById('contact-menu');

const listSection = document.querySelector('.books-list');
const addBookSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.contact');

list.addEventListener('click', () => {
  listSection.classList.add('active');
  addBookSection.classList.remove('active');  
  contactSection.classList.remove('active');  
});

addNew.addEventListener('click', () => {
  listSection.classList.remove('active');
  addBookSection.classList.add('active');  
  contactSection.classList.remove('active');  
});

contact.addEventListener('click', () => {
  listSection.classList.remove('active');
  addBookSection.classList.remove('active');  
  contactSection.classList.add('active');  
});


