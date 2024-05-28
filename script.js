var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/New%20York%20Times%20Bestsellers%202011-2018.csv";
var publishers = getColumn(url, 1);
var bookNames = getColumn(url, 5)
var weeks = getColumn(url, 6)
var authors = getColumn(url, 2)
/*Returns the publisher of an input book name
@param bookName{string} - the name of desired book (this can be capitalized or lower case but will display "Not Found" if misspelled.)
The return will be the publisher of a book (string)
*/
function getPublisher(bookName){ 
    var match = "Book not found";

    for(var i = 0; i < bookNames.length; i++){
        if(bookNames[i].toLowerCase().includes(bookName.toLowerCase())){
            match = publishers[i];
        }  
       
    
    } 
    return match; 
   
} 

// console.log(getPublisher("the help")); 

/*Returns the book titles of an input author
@param author{string} - the name of the desired author (this can be capitalized or lower case but will display "Not Found" if misspelled.)
The return will be multiple book titles by the author (list)
function getBooks(author)*/

function getBooks(author){//returns the book titles of an input author
    var matches = [];

    for(var i = 0; i < authors.length; i++){
        if(authors[i].toLowerCase().includes(author.toLowerCase())){
            matches.push(bookNames[i])
        }
    }

    if(matches.length == 0){
        matches.push("Author not found")
    }
    return matches;
}
// console.log(getBooks("craig Johnson"));  

/* Returns the author of an input book title
@param bookName{string} - the name of the desired book (this can be capitalized or lower case but will display "Not Found" if misspelled.)
The return will be the author of the book (string)
function getAuthor(bookName) */

function getAuthor(bookName){//gets the author of an input book title
    var match = "Author not Found";

    for(var i = 0; i < authors.length; i++){
        if(bookNames[i].toLowerCase().includes(bookName.toLowerCase())){
            match = authors[i];
        }
    }
    return match;

}
// console.log(getAuthor("wIred")) 


/*Finds the longest book title by a certain publisher
@param publisher{string} - the name of the desired publisher (this can be capitalized or lower case but will display "Not Found" if misspelled.)
The return will be the book title (string)
function findLongestTitle(publisher)*/

function findLongestTitle(publisher){//finds the longest title by an input publisher
    var longest = "";

    for(var i = 0; i < authors.length; i++){
        if(publisher.toLowerCase().includes(publishers[i].toLowerCase()) && bookNames[i].length > longest.length){
                longest = bookNames[i];
        }
        if(longest == ""){
            longest = "That publisher was not found."
        }
    }
    return longest;
}

//console.log(findLongestTitle(""))

/*Finds the book that has maintained its position on the best sellers' list for the longest time by an input publisher
@param publisher{string} - the name of the desired publisher (this can be capitalized or lower case but will display "Not Found" if misspelled.)
The return will be the book title (string)
function findLongestTime(publisher)*/

function findLongestTime(publisher){//finds the book with the longest time on the best sellers list by an input publisher

    var mostTime = 0;
    var winner = ""

    for(var i = 0; i < publisher.length; i++){
        if(publishers[i].toLowerCase().includes(publisher.toLowerCase()) && weeks[i] > mostTime){
            winner = bookNames[i]
            mostTime = weeks[i]
    }
    if(mostTime == 0){
        winner = "That publisher was not found."
    }
}
    return winner

}
 console.log(findLongestTime("riverhead"));








function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
