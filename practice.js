console.log("testing...");

let name = "Johnny";



let friends = [ "Danny", "John" ];

console.log( friends.length );
console.log( friends[1] );

let age = 28;

age = 1 + ( age * 2 );


console.log(age);


//If & Else

let isEnrolled = true;

if (isEnrolled) {
    console.log("Take Class");
} else {
    console.log("Enroll First!");
}

//Loops

let students = ["Johnny", "Alex", "Katie", "Danny"];

// for (let i = 0; i < students.length; i++) {
//     greetStudents(students[i]);
// }

// for (let student of students) {
//     greetStudents(student);
// }

//While loop

while (students.length > 0) {
    let student = students.shift();
    console.log(`Hello, ${student}!`);
}

//Function

function greetStudent(student) {
    console.log(`Hello, ${student.name}.`);
}

function timeRemaining(timeElapsed, endTime) {
    return endTime - timeElapsed;
}

let left = timeRemaining(42, 240);

console.log(left);


// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName) {
    //! is excluding "Great" if no ! then it only includes books with "Great"
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
        console.log(bookName);
    } 
}


// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
}

let favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();


