let myBookLibrary = [
    {title : "Purple", 
    author : "Chimamanda Adiche",
    pages : 223,
    read : "Not Yet"
}
];

const bookContainer = document.getElementById("bookContainer");

const submitBTN = document.getElementById("submit");

const addNewBTN = document.getElementById("add-book");

const formContainer = document.getElementById("form-container");

const cancelBTN = document.getElementById("cancel");

class MyBooks{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages 
    }
}


function createBookCard(item, index){
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute('id','card-items');
    cardContainer.setAttribute('data-index',index)
    let bookTitle = document.createElement("h3");
    bookTitle.innerText =  `${item.title}`;
    let bookAuthor = document.createElement("h2");
    bookAuthor.innerText =  `${item.author}`;
    let bookPages = document.createElement("h4");
    bookPages.innerText =  `${item.pages}`;
    let readStatus = document.createElement("button");
    readStatus.setAttribute("id","checked")
    readStatus.innerText =  `${item.read}`;
    let deleteButton = document.createElement('input');
    deleteButton.setAttribute('class', 'Dbtn')
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    function deleteFunc() {
        bookContainer.removeChild(cardContainer);
    }
    deleteButton.onclick = deleteFunc.bind(this);
    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(readStatus);
    cardContainer.appendChild(deleteButton)
    bookContainer.appendChild(cardContainer);
}


function createObj(){
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read-status").value;
    const newBook = new MyBooks(titleInput, authorInput, pagesInput, readInput);
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

displayLibrary()
