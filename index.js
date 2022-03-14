let books = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];

const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');

const reload = () => {
  booksContainer.innerHTML = books
    .map((bookItem, index) => `<p>${bookItem.title}</p>
      <p>${bookItem.author}.</p>
      <button onclick="removeBook(${index})">Remove</button>
      <hr>`)
    .join('');
};

reload();

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.push(newBook);

  localStorage.setItem('books', JSON.stringify(books));

  reload();
});
/* eslint-disable no-unused-vars */
const removeBook = (bookIndex) => {
  books = books.filter((item, index) => {
    if (index !== bookIndex) {
      return item;
    }
    return undefined;
  });
  localStorage.setItem('books', JSON.stringify(books));
  reload();
};
/* eslint-disable no-unused-vars */
