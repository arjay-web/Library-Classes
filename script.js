const bookForm = document.getElementById('book-form');
const showDocument = document.querySelector('#new-book-btn');

const myLibrary = [];

class Book {
    constructor(title, author, page, isRead){
     this.title = title;
     this.author = author;
     this.page  = page;
     this.isRead = isRead;
    }

}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('isRead').checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    console.log(myLibrary);
}





bookForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    addBookToLibrary()
})

showDocument.addEventListener('click',()=>{ document.getElementById('book-form').style.display = 'block';
})