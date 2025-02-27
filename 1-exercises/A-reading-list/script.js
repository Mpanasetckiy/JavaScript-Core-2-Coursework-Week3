// Get DOM elements
const bookContainer = document.querySelector('#reading-list');

function readingList(books) {
  // Write your code here...
  let result = '';
  for (let book of books) {
    let read = "class='not-read'";
    book.alreadyRead? read = 'class="read"' : read;
      
    result += `
      <li ${read}>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <img src="${book.bookCoverImage}" alt="">
    </li>`
  }
  bookContainer.innerHTML = result;
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
