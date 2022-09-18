let myBookLibrary = [];

let bookContainer = document.getElementById("bookContainer");

let submitBTN = document.getElementById("submit");

let addNewBTN = document.getElementById("add-book");

let formContainer = document.getElementById("form-container");

let cancelBTN = document.getElementById("cancel");

function addToMyBookLibrary(item){
    myBookLibrary.push(item);
}

function MyBooks(title, author, pages, read){
    this.title = `"${title}"`;
    this.author = `by ${author}`;
    this.pages = `${pages} pages`;
    this.read = read;
    this.info = function(){
      return (title + " by " + author + ", " + pages + " pages, " + read);
    }   
}

MyBooks.prototype.changeReadStatus = function() {
    if(this.read = "Read"){
        this.read = "Not yet";
    } 
} 


function displayLibrary(){
    for(let item in myBookLibrary){
        let cardContainer = document.createElement("div");
        cardContainer.setAttribute('id','card-items');
        bookContainer.appendChild(cardContainer);
        let bookTitle = document.createElement("h3");
        bookTitle.setAttribute("data-item", item)
        bookTitle.innerText =  `${myBookLibrary[item].title}`;
        let bookAuthor = document.createElement("h2");
        bookAuthor.innerText =  `${myBookLibrary[item].author}`;
        let bookPages = document.createElement("h4");
        bookPages.innerText =  `${myBookLibrary[item].pages}`;
        let readStatus = document.createElement("button");
        readStatus.innerText =  `${myBookLibrary[item].read}`;
        cardContainer.appendChild(bookTitle);
        cardContainer.appendChild(bookAuthor);
        cardContainer.appendChild(bookPages);
        cardContainer.appendChild(readStatus);
    }
}

addNewBTN.addEventListener("click", function(){
    formContainer.style.display = "block";
    addNewBTN.style.display = "none";
})

submitBTN.addEventListener("click", function(){
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read-status").value;
    let newBook = new MyBooks(titleInput, authorInput, pagesInput, readInput);
    addToMyBookLibrary(newBook);
    removeForm();
    displayLibrary();
    myBookLibrary = [];
})

cancelBTN.addEventListener("click",removeForm)

function removeForm(){
    formContainer.style.display = "none";
    addNewBTN.style.display = "block";
}

console.log(myBookLibrary)