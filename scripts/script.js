let myBookLibrary = [];


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

function displayLibrary(myBookLibrary){
    myBookLibrary.map
}

const newBook = new myBooks("Chike and the River", "Chinua Achebe", 345, "not read yet")
console.log(newBook.info())