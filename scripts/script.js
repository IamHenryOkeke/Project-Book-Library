let myBookLibrary = [];

const bookContainer = document.getElementById("bookContainer");

const submitBTN = document.getElementById("submit");

const addNewBTN = document.getElementById("add-book");

const formContainer = document.getElementById("form-container");

const cancelBTN = document.getElementById("cancel");

function MyBooks(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages
    // this.info = function(){
    //   return (title + " by " + author + ", " + pages + " pages, " + read);
    // }   
}

// MyBooks.prototype.changeReadStatus = function() {
//     if(this.read = "Read"){
//         this.read = "Not yet";
//     } 
// } 

function createBookCard(item, index){
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute('id','card-items');
    cardContainer.setAttribute('data-index',index)
    bookContainer.appendChild(cardContainer);
    let bookTitle = document.createElement("h3");
    bookTitle.innerText =  `${item.title}`;
    let bookAuthor = document.createElement("h2");
    bookAuthor.innerText =  `${item.author}`;
    let bookPages = document.createElement("h4");
    bookPages.innerText =  `${item.pages}`;
    let readStatus = document.createElement("button");
    readStatus.innerText =  `${item.read}`;
    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(readStatus);
}


function createObj(){
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read-status").value;
    const newBook = Object.create(MyBooks);
    newBook.title = `"${titleInput}"`;
    newBook.author = `${authorInput}`;
    newBook.pages = `${pagesInput} pages`;
    newBook.read = readInput;
    return newBook
}

function addToMyBookLibrary(item){
    myBookLibrary.push(item);
}

function displayLibrary(){
    let index = myBookLibrary.length-1
    createBookCard(myBookLibrary[index], index)        
}

function removeForm(){
    formContainer.style.display = "none";
    addNewBTN.style.display = "block";
}

function deleteBook(index){
    // deleteBookBtn
    myBookLibrary.splice(index,1);
    bookContainer.removeChild(bookContainer.children[index]);
    displayLibrary();
    // const child = document.getElementById('child');
    // child.parentElement.remove();
}


addNewBTN.addEventListener("click", function(){
    formContainer.style.display = "block";
    addNewBTN.style.display = "none";
})

submitBTN.addEventListener("click", function(){
    let newObject = createObj()
    addToMyBookLibrary(newObject);
    removeForm();
    displayLibrary();
})

cancelBTN.addEventListener("click",removeForm);

deleteBookBtn.addEventListener("click", deleteBook)

