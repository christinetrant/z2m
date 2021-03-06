-- Q1 Creating a table and inserting data

/* create a table to store your list of books. It should have columns for id, name, and rating. */

CREATE TABLE books (id integer, name text, rating integer);

/* Now, add three of your favorite books into the table. */
INSERT INTO books(id, name, rating) VALUES (1, 'Harry Potter', 5);
INSERT INTO books(id, name, rating) VALUES (2, 'The Hunger Games', 5);
INSERT INTO books(id, name, rating) VALUES (3, 'Mortal Instruments', 4);


-- Q2 Querying the table
CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, release_year INTEGER);
INSERT INTO movies VALUES (1, "Avatar", 2009);
INSERT INTO movies VALUES (2, "Titanic", 1997);
INSERT INTO movies VALUES (3, "Star Wars: Episode IV - A New Hope", 1977);
INSERT INTO movies VALUES (4, "Shrek 2", 2004);
INSERT INTO movies VALUES (5, "The Lion King", 1994);
INSERT INTO movies VALUES (6, "Disney's Up", 2009);

/* select all the movies */
SELECT * FROM movies;

/* Now, add a second query after the first, that retrieves only the movies that were released in the year 2000 or later, not before. Sort the results so that the earlier movies are listed first. You should have 2 SELECT statements after this step. */
SELECT * FROM movies;
SELECT * FROM movies WHERE release_year > 2000 ORDER BY release_year ASC;


-- Q3 Aggregating Data
CREATE TABLE todo_list (id INTEGER PRIMARY KEY, item TEXT, minutes INTEGER);
INSERT INTO todo_list VALUES (1, "Wash the dishes", 15);
INSERT INTO todo_list VALUES (2, "vacuuming", 20);
INSERT INTO todo_list VALUES (3, "Learn some stuff on KA", 30);

/* Insert another item to your todo list with the estimated minutes it will take. */
INSERT INTO todo_list VALUES (4, "Finish Smart brain", 200);

/* Select the SUM of minutes it will take to do all of the items on your TODO list. You should only have one SELECT statement. */
SELECT SUM(minutes) FROM todo_list;


-- EXTRA NOTES
CREATE TABLE groceries (id INTEGER PRIMARY KY, name TEXT, quantity INTEGER, aisle INTEGER);
INSERT INTO groceries VALUES (1, "Bananas", 4, 7);
INSERT INTO groceries VALUES (2, "Peanut Butter", 1, 2);
INSERT INTO groceries VALUES (3, "Dark Chocolate", 2, 2);
INSERT INTO groceries VALUES (4, "Ice Cream", 1, 12);
INSERT INTO groceries VALUES (5, "Pizza", 6, 2);
INSERT INTO groceries VALUES (6, "Tofu", 1, 4);

/* To get the sum of products and display by aisle: */
SELECT aisle, SUM(quantity) FROM groceries GROUP BY aisle;



-- Project
/* Create your own store! Your store should sell one type of things, like clothing or bikes, whatever you want your store to specialize in. You should have a table for all the items in your store, and at least 5 columns for the kind of data you think you'd need to store. You should sell at least 15 items, and use select statements to order your items by price and show at least one statistic about the items. */

CREATE TABLE book_shop (id INTEGER PRIMARY KEY, name TEXT, author TEXT, genre TEXT, price NUMERIC);

INSERT INTO book_shop VALUES (1, "Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 'childrens', 9);
INSERT INTO book_shop VALUES (2, 'Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 'childrens', 9);
INSERT INTO book_shop VALUES (3, 'Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 'childrens', 9);
INSERT INTO book_shop VALUES (4, 'Harry Potter and the Goblet of Fire', 'J.K. Rowling', 'childrens', 10);
INSERT INTO book_shop VALUES (5, 'Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 'childrens', 10);
INSERT INTO book_shop VALUES (6, 'Harry Potter and the Half-Blood Prince', 'J.K. Rowling', 'childrens', 12);
INSERT INTO book_shop VALUES (7, 'Harry Potter and the Deathly Hallows', 'J.K. Rowling', 'childrens', 14);
INSERT INTO book_shop VALUES (8, 'James and the Giant Peach', 'Roald Dahl', 'childrens', 14);
INSERT INTO book_shop VALUES (9, 'The Power of Now', 'Eckhart Tolle', 'Self-Help', 14.99);
INSERT INTO book_shop VALUES (10, 'The Hunger Games', 'Suzanne Collins', 'dystopian', 8);
INSERT INTO book_shop VALUES (11, 'Catching Fire', 'Suzanne Collins', 'dystopian', 10);
INSERT INTO book_shop VALUES (12, 'Mockingjay', 'Suzanne Collins', 'dystopian', 11);
INSERT INTO book_shop VALUES (13, 'The Break', 'Marian Keyes', 'fiction', 12);
INSERT INTO book_shop VALUES (14, 'Eleanor Oliphant is Completely Fine', 'Gail Honeyman', 'fiction', 10.99);
INSERT INTO book_shop VALUES (15, 'Watermelon', 'Marian Keyes', 'fiction', 14);


SELECT name, price FROM book_shop ORDER BY price ASC;

SELECT name FROM book_shop WHERE genre = 'fiction';
