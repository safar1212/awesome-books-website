let books = [
  {
    title: "Grow and think rich",
    author: "John",
  },
  {    
    title: "The persue to happiness",
    author: "Chris Gardener",
  },
];

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

  reload();

});

const removeBook = (bookIndex) => {
  console.log(bookIndex);
  books.splice(bookIndex, 1);
  console.log(books);
  reload();
}
