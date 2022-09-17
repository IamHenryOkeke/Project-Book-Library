let myBookLibrary = [];

let cardContainer = document.getElementById("bookCard")

let submitBTN = document.getElementById("submit")

let addNewBTN = document.getElementById("add-book")

let formContainer = document.getElementById("form-container")

function addToMyBookLibrary(item){
    myBookLibrary.push(item);
}

function myBooks(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      return (title + " by " + author + ", " + pages + " pages, " + read)
    }
}

function displayLibrary(){
    for(let item in myBookLibrary){
        let card = document.createElement("div");
        card.innerText += ` ${myBookLibrary[item].info()}`;
        cardContainer.appendChild(card)
    }
}

addNewBTN.addEventListener("click", function(){
    formContainer.style.display = "block"
    addNewBTN.style.display = "none"
})

submitBTN.addEventListener("click", function(){
    formContainer.style.display = "none"
    addNewBTN.style.display = "block"
})

const newBook = new myBooks("Chike and the River", "Chinua Achebe", 345, "not read yet")

const newBook1 = new myBooks("Henry and the River", "Chinua Achebe", 345, "not read yet")

addToMyBookLibrary(newBook);

addToMyBookLibrary(newBook1);

console.log(myBookLibrary)

displayLibrary()