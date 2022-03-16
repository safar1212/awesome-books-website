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

const sections = document.querySelectorAll('.section');

list.addEventListener('click', () => {
  sections.forEach((item) => {
    item.classList.contains('books-list') ? item.classList.add('active') : item.classList.remove('active');    
  });
});

addNew.addEventListener('click', () => {
  sections.forEach((item) => {
    item.classList.contains('add-book') ? item.classList.add('active') : item.classList.remove('active');    
  });
});

contact.addEventListener('click', () => {
  sections.forEach((item) => {
    item.classList.contains('contact') ? item.classList.add('active') : item.classList.remove('active');    
  });
});


