
"use strict";

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
            console.log(this.title + " issued successfully.");
        } else {
            console.log(this.title + " is already issued.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("Java Programming", "James Gosling", "101"),
    new Book("Python Basics", "John Smith", "102"),
    new Book("Web Development", "David", "103"),
    new Book("Data Structures", "Mark", "104")
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(`${book.title} - ${book.author} - ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();
