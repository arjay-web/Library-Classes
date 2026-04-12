const bookForm = document.getElementById('book-form');
const showDocument = document.querySelector('#new-book-btn');
const libraryContainer = document.querySelector('#library-container');

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
    renderLibrary()

}

function renderLibrary(){
    libraryContainer.innerHTML = "";
    myLibrary.forEach((book, index)=>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
        <h3> ${book.title}</h3>
        <p>${book.author} • ${book.page}</p>
        <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
        <div class="book-action">
        <button class="toggle-read" data-index="${index}">Mark read</button>
        <button class="remove" data-index="${index}">Remove</button>
        </div>
        `

        libraryContainer.appendChild(bookDiv)
    })
}

libraryContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("toggle-read")){
         const index = e.target.dataset.index;

        myLibrary[index].isRead = !myLibrary[index].isRead;

        renderLibrary();
    }
})


bookForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    addBookToLibrary()
})

showDocument.addEventListener('click',()=>{ document.getElementById('book-form').style.display = 'block';
})