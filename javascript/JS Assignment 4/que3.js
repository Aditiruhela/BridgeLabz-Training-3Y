class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully`);
        } else {
            console.log("Book already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned successfully`);
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Basics", "Alex", "102"),
    new Book("Java Basics", "Sam", "103", true)
];

console.log("Available Books:");

books
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.title));

const searchISBN = "102";

const book = books.find(book => book.ISBN === searchISBN);

if (book) {
    book.issueBook();
} else {
    console.log("Book not found");
}