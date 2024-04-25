# New York Times Best Sellers Library

Runs through data set to find the publisher based on a book name, all of the books of a specified author, the author of a specified book, the longest title of a publisher, and the longest running best seller of a specified publisher
#
### Returns the publisher of an input book name
###### @param bookName{string} - the name of desired book (this can be capitalized or lower case but will display "Not Found" if misspelled.)

**`function getPublisher(bookName)`** 
#

### Returns the book titles of an input author
###### @param author{string} - the name of the desired author (this can be capitalized or lower case but will display "Not Found" if misspelled.)

**`function getBooks(author)`**

### Returns the author of an input book title
###### @param bookName{string} - the name of the desired book (this can be capitalized or lower case but will display "Not Found" if misspelled.)

**`function getAuthor(bookName)`**

### Finds the longest book title by a certain publisher
###### @param publisher{string} - the name of the desired publisher (this can be capitalized or lower case but will display "Not Found" if misspelled.)

**`function findLongestTitle(publisher)`**

### Finds the book that has maintained its position on the best sellers' list for the longest time by an input publisher
###### @param publisher{string} - the name of the desired publisher (this can be capitalized or lower case but will display "Not Found" if misspelled.)

**`function findLongestTime(publisher)`**

