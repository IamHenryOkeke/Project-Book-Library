let myBookLibrary = [];

let cardContainer = document.getElementById("card")

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

const newBook = new myBooks("Chike and the River", "Chinua Achebe", 345, "not read yet")

const newBook1 = new myBooks("Henry and the River", "Chinua Achebe", 345, "not read yet")

// addToMyBookLibrary(newBook);

// addToMyBookLibrary(newBook1);

console.log(myBookLibrary)

displayLibrary()