const books = [
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'bla bla bla',
    'Learn JavaScript VISUALLY',
    'lba lba lba'];

const search = 'javaScript';
let jsBook = [];
for(book of books){
    //console.log(book.toLowerCase());
    //console.log(search.toLowerCase());
    if(book.toLowerCase().includes(search.toLowerCase())){
        jsBook.push(book);
    }
    
}
console.log(jsBook);