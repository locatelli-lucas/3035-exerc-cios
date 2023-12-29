const books = [
    {
      title: 'O Pequeno Príncipe',
      author: 'Antoine de Saint-Exupéry',
      publicationDate: 1943,
    },
    {
      title: 'O Hobbit',
      author: 'J. R. R. Tolkien',
      publicationDate: 1937,
    },
    {
      title: 'A Revolução dos Bichos',
      author: 'George Orwell',
      publicationDate: 1945,
    },
  ];

function addBook(title, author, publicationDate) {
    books.push({
        title: title,
        author: author,
        publicationDate: publicationDate
    })
    return books
}

function findBooksbyAuthor(author) {
    let booksbyAuthor = books.filter(book => book.author === author)
    return booksbyAuthor;
}

function changeReleaseDate(title, newDate) {
    let newReleaseDate = books.filter(book => {
        if(book.title === title) {
            book.publicationDate = newDate
        }
    });
    return books
}

console.log(addBook('O Senhor dos Anéis', 'J. R. R. Tolkien', 1954))


console.log(findBooksbyAuthor('J. R. R. Tolkien'))

console.log(changeReleaseDate('O Hobbit', 2000))