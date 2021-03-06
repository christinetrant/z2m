-- SQL Commands


-- To create a database
CREATE DATABASE DatabaseName;

-- To create a table
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
/*e.g.,*/
CREATE TABLE users (name text, age smallint, birthday date);

-- To view table in command line
`\d`

-- To exit PostgreSQL
`\q`


-- Insert Into + Select

-- INSERT INTO
INSERT INTO users(name, age, birthday) VALUES ('Andrei', 31, '1930-01-25');

-- To view entries in a table
SELECT name, age, birthday FROM users
/*
 name  | age |  birthday
-------+-----+-----------
Andrei |  31 | 1930-01-25
*/

-- or just to view all:
SELECT * FROM users;


-- SQL: Alter Table + Update

-- Alter Table
ALTER TABLE table_name ADD column datatype;
/*e.g.,*/
ALTER TABLE users ADD score smallint;

-- Update a table
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value;
/*e.g.,*/
UPDATE users SET score = 50 WHERE name = 'Andrei';

UPDATE users SET score = 100 WHERE name = 'John' OR name = 'Sally';

-- SQL: Conditional Selections

-- To search for a name
/*Searches are case sensitive 
In the below statement we are looking for a name starting with A. 
The % means it can be anything after A*/
SELECT * FROM users WHERE name LIKE 'A%';

SELECT * FROM users WHERE name LIKE '%y';

-- Sort in order
SELECT * FROM users ORDER BY score DESC;
/*
 name  | age |  birthday  | score
-------+-----+------------+-------
Sally  |  38 | 1985-06-04 |   100
John   |  61 | 1930-04-04 |   100
Amy    |  24 | 1930-12-28 |    88
Andrei |  31 | 1930-01-25 |    50
*/

SELECT * FROM users ORDER BY score ASC;


-- SQL Functions

-- To get the average score of users:
SELECT AVG(score) FROM users;

-- To get the sum of users age:
SELECT SUM(age) FROM users;

-- To find out how many users we have in our database:
SELECT COUNT(name) FROM users;


-- Joining Tables

CREATE TABLE login {
    ID serial NOT NULL PRIMARY KEY,
    secret VARCHAR (100) NOT NULL,
    name text UNIQUE NOT NULL
};

/*Above we are creating a login table with 
and ID of datatype serial, so every time a new user is incremented it will add a new id +1, 
NOT NULL means that this has to be a filled in property.
It is also the primary key.  Primary keys are always unique to each row so ID is perfect.

secret is variable character of 100.  This means it will not be greater than 100 and as it is not null it always needs to be filled in

name of datatype text has to be unique.  
*/

-- To add a row to the newly created table:
INSERT INTO login (secret, name) VALUES ('abc', 'Andrei');
INSERT INTO login (secret, name) VALUES ('xyz', 'Sally');
INSERT INTO login (secret, name) VALUES ('lol', 'John');

/*We now have 2 tables with Andrei, Sally & John
Andrei, Sally & John is the FOREIGN KEY as it is the common denominator in both tables*/

-- Joining tables
/*Say we want information from users to join with login.  As name is the primary key we join using the names in both tables as the common factor:*/

SELECT * FROM users JOIN login ON users.name = login.name;
/*
 name  | age |  birthday  | score | id | secret | name
-------+-----+------------+-------+----+--------+------
Andrei |  31 | 1930-01-25 |    50 |  1 | abc    | Andrei
Sally  |  38 | 1985-06-04 |   100 |  2 | xyz    | Sally 
John   |  61 | 1930-04-04 |   100 |  3 | lol    | John
*/
/*With JOIN we can make small little tables to select specific information that we need.*/

-- Delete From + Drop Table
/*If Sally wants to delete her information*/
DELETE FROM users WHERE name = 'Sally'; 


-- To Delete a table
DROP TABLE login;

DROP TABLE users;