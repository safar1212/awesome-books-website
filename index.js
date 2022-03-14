const books = [
  {
    title: 'Grow and think rich',
    author: 'John',
  },
  {
    title: 'The persue to happiness',
    author: 'Chris Gardener',
  },
];

let booksContainer = document.getElementById('books-container');


booksContainer.innerHTML = books.map(bookItem => {
    return `<p>${bookItem.title}</p>
    <p>${bookItem.author}.</p>
    <button>Remove</button>
    <hr>`
}). join('');
