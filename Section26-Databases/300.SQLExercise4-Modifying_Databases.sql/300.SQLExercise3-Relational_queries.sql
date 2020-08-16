/* JOINing related tables*/
/* Splitting data into related tables */
CREATE TABLE students (id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  birthdate TEXT);

INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");

INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");

CREATE TABLE student_grades (id INTEGER PRIMARY KEY,
  student_id INTEGER,
  test TEXT,
  grade INTEGER);

INSERT INTO student_grades (student_id, test, grade)
  VALUES (1, "Nutrition", 95);
INSERT INTO student_grades (student_id, test, grade)
  VALUES (2, "Nutrition", 92);
INSERT INTO student_grades (student_id, test, grade)
  VALUES (1, "Chemistry", 85);
INSERT INTO student_grades (student_id, test, grade)
  VALUES (2, "Chemistry", 95);

CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
  student_id INTEGER,
  title TEXT);
    
INSERT INTO student_projects (student_id, title)
  VALUES (1, "Carrotapault");
/* CROSS JOIN */
/* Get student name and email next to each test grade - we need info from two different tables so we need to JOIN 
This gives us everything which isn't ideal*/
SELECT * FROM student_grades, students;

/* IMPLICIT INNER JOIN */
/* */
SELECT * FROM student_grades, students 
  WHERE  student_grades.student_id = students.id;

/* EXPLICIT INNER JOIN */
SELECT * FROM students 
  JOIN student_grades
  ON students.id = student_grades.id;

/* To get only info we want: */
SELECT first_name, last_name, email, test, grade FROM students
  JOIN student_grades
  ON students.id = student_grades.student_id;

/* To be safe we should prefix from tables we want info from: */
  SELECT students.first_name, students.last_name, students.email, student_grades.test, student_grades.grade FROM students
  JOIN student_grades
  ON students.id = student_grades.student_id
  WHERE grade > 90;

/* Joining related tables with left outer joins */
/* With an inner join we will only see one project that Peter Rabbit is doing, we see nothing for Alice, but if we want to see all students regardless of whether they have a project we need: */
/* OUTER JOIN */
SELECT students.first_name, students.last_name, student_projects.title
  FROM students
  LEFT OUTER JOIN student_projects
  ON students.id = student_projects.student_id;
/* So LEFT means we want all info from the left table (the FROM table)
and we want it to retain the rows even if there is no match in the OUTER (right table) so Alice has a project title of NULL */

/* JOINING TABLES TO THEMSELVES WITH SELF JOINS */
/* created a new column - buddy_id, this is related to another column in the SAME table */
CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT,
    buddy_id INTEGER);

INSERT INTO students 
    VALUES (1, "Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24", 2);
INSERT INTO students 
    VALUES (2, "Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04", 1);
INSERT INTO students 
    VALUES (3, "Aladdin", "Lampland", "aladdin@lampland.com", "555-3333", "2001-05-10", 4);
INSERT INTO students 
    VALUES (4, "Simba", "Kingston", "simba@kingston.com", "555-1111", "2001-12-24", 3);
    
SELECT id, first_name, last_name, buddy_id FROM students;
/* SELF JOIN */
/* To select info from the same table we join them by adding an 'alias' to the JOIN */
SELECT students.first_name, students.last_name, buddies.email as buddy_email
    FROM students
    JOIN students buddies
    ON students.buddy_id = buddies.id;

/* COMBINING MULTIPLE JOINS */
CREATE TABLE students (id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT);

INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Aladdin", "Lampland", "aladdin@lampland.com", "555-3333", "2001-05-10");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Simba", "Kingston", "simba@kingston.com", "555-1111", "2001-12-24");
    
CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    title TEXT);
    
INSERT INTO student_projects (student_id, title)
    VALUES (1, "Carrotapault");
INSERT INTO student_projects (student_id, title)
    VALUES (2, "Mad Hattery");
INSERT INTO student_projects (student_id, title)
    VALUES (3, "Carpet Physics");
INSERT INTO student_projects (student_id, title)
    VALUES (4, "Hyena Habitats");
    
CREATE TABLE project_pairs (id INTEGER PRIMARY KEY,
    project1_id INTEGER,
    project2_id INTEGER);

INSERT INTO project_pairs (project1_id, project2_id)
    VALUES(1, 2);
INSERT INTO project_pairs (project1_id, project2_id)
    VALUES(3, 4);
    
SELECT a.title, b.title FROM project_pairs
    JOIN student_projects a
    ON project_pairs.project1_id = a.id
    JOIN student_projects b
    ON project_pairs.project2_id = b.id;





-- EXERCISES
-- CHALLENGE: BOBBY'S HOBBIES (JOIN)
CREATE TABLE persons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
  age INTEGER);
    
INSERT INTO persons (name, age) 
  VALUES ("Bobby McBobbyFace", 12);
INSERT INTO persons (name, age) VALUES ("Lucy BoBucie", 25);
INSERT INTO persons (name, age) 
  VALUES ("Banana FoFanna", 14);
INSERT INTO persons (name, age) 
  VALUES ("Shish Kabob", 20);
INSERT INTO persons (name, age) 
  VALUES ("Fluffy Sparkles", 8);
INSERT INTO persons (name, age) 
  VALUES ("Billy", 9);

CREATE table hobbies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER,
  name TEXT);
    
INSERT INTO hobbies (person_id, name)
  VALUES (1, "drawing");
INSERT INTO hobbies (person_id, name)
  VALUES (1, "coding");
INSERT INTO hobbies (person_id, name)
  VALUES (2, "dancing");
INSERT INTO hobbies (person_id, name)
  VALUES (2, "coding");
INSERT INTO hobbies (person_id, name)
  VALUES (3, "skating");
INSERT INTO hobbies (person_id, name)
  VALUES (3, "rowing");
INSERT INTO hobbies (person_id, name)
  VALUES (3, "drawing");
INSERT INTO hobbies (person_id, name)
  VALUES (4, "coding");
INSERT INTO hobbies (person_id, name)
  VALUES (4, "dilly-dallying");
INSERT INTO hobbies (person_id, name)
  VALUES (4, "meowing");
INSERT INTO hobbies (person_id, name)
  VALUES (6, "eating");
/* Insert one more row in persons and then one more row in hobbies that is related to the newly inserted person. */
/* select the 2 tables with a join so that you can see each person's name next to their hobby. */
SELECT persons.name, hobbies.name FROM persons
  JOIN hobbies
  ON persons.id = hobbies.person_id;
/* add an additional query that shows only the name and hobbies of 'Bobby McBobbyFace', using JOIN combined with WHERE. */
SELECT persons.name, hobbies.name FROM persons
  JOIN hobbies
  ON persons.id = hobbies.person_id
  WHERE persons.name = "Bobby McBobbyFace";


-- CHALLENGE: CUSTOMER'S ORDERS (LEFT OUTER JOIN)
CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT);
    
INSERT INTO customers (name, email) VALUES ("Doctor Who", "doctorwho@timelords.com");
INSERT INTO customers (name, email) VALUES ("Harry Potter", "harry@potter.com");
INSERT INTO customers (name, email) VALUES ("Captain Awesome", "captain@awesome.com");

CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  item TEXT,
  price REAL);

INSERT INTO orders (customer_id, item, price)
  VALUES (1, "Sonic Screwdriver", 1000.00);
INSERT INTO orders (customer_id, item, price)
  VALUES (2, "High Quality Broomstick", 40.00);
INSERT INTO orders (customer_id, item, price)
  VALUES (1, "TARDIS", 1000000.00);

/* Come up with a query that lists the name and email of every customer followed by the item and price of orders they've made. Use a LEFT OUTER JOIN so that a customer is listed even if they've made no orders, and don't add any ORDER BY. */
SELECT customers.name, customers.email, orders.item, orders.price 
  FROM customers
  LEFT OUTER JOIN orders
  ON customers.id = orders.customer_id;

/* create another query that will result in one row per each customer, with their name, email, and total amount of money they've spent on orders. Sort the rows according to the total money spent, from the most spent to the least spent.
(Tip: You should always GROUP BY on the column that is most likely to be unique in a row.) */
SELECT customers.name, customers.email, SUM(orders.price)
  FROM customers
  LEFT OUTER JOIN orders
  ON customers.id = orders.customer_id
  GROUP BY customers.id
  ORDER BY orders.price DESC;


-- CHALLENGE: SEQUELS IN SQL (SELF JOINS)
CREATE TABLE movies (id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  released INTEGER,
  sequel_id INTEGER);

INSERT INTO movies 
  VALUES (1, "Harry Potter and the Philosopher's Stone", 2001, 2);
INSERT INTO movies 
  VALUES (2, "Harry Potter and the Chamber of Secrets", 2002, 3);
INSERT INTO movies 
  VALUES (3, "Harry Potter and the Prisoner of Azkaban", 2004, 4);
INSERT INTO movies 
  VALUES (4, "Harry Potter and the Goblet of Fire", 2005, 5);
INSERT INTO movies 
  VALUES (5, "Harry Potter and the Order of the Phoenix ", 2007, 6);
INSERT INTO movies 
  VALUES (6, "Harry Potter and the Half-Blood Prince", 2009, 7);
INSERT INTO movies 
  VALUES (7, "Harry Potter and the Deathly Hallows – Part 1", 2010, 8);
INSERT INTO movies 
  VALUES (8, "Harry Potter and the Deathly Hallows – Part 2", 2011, NULL);

/* We've created a table with all the 'Harry Potter' movies, with a sequel_id column that matches the id of the sequel for each movie. Issue a SELECT that will show the title of each movie next to its sequel's title (or NULL if it doesn't have a sequel). */
SELECT movies.title, sequels.title AS next_title
  FROM movies
  LEFT OUTER JOIN movies sequels
  ON movies.sequel_id = sequels.id


-- Challenge: FriendBook (MULTIPLE JOINS)
CREATE TABLE persons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  age INTEGER);
    
INSERT INTO persons (fullname, age) VALUES ("Bobby McBobbyFace", "12");
INSERT INTO persons (fullname, age) VALUES ("Lucy BoBucie", "25");
INSERT INTO persons (fullname, age) VALUES ("Banana FoFanna", "14");
INSERT INTO persons (fullname, age) VALUES ("Shish Kabob", "20");
INSERT INTO persons (fullname, age) VALUES ("Fluffy Sparkles", "8");

CREATE table hobbies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER,
  name TEXT);
    
INSERT INTO hobbies (person_id, name) VALUES (1, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (1, "coding");
INSERT INTO hobbies (person_id, name) VALUES (2, "dancing");
INSERT INTO hobbies (person_id, name) VALUES (2, "coding");
INSERT INTO hobbies (person_id, name) VALUES (3, "skating");
INSERT INTO hobbies (person_id, name) VALUES (3, "rowing");
INSERT INTO hobbies (person_id, name) VALUES (3, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (4, "coding");
INSERT INTO hobbies (person_id, name) VALUES (4, "dilly-dallying");
INSERT INTO hobbies (person_id, name) VALUES (4, "meowing");

CREATE table friends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person1_id INTEGER,
  person2_id INTEGER);

INSERT INTO friends (person1_id, person2_id)
  VALUES (1, 4);
INSERT INTO friends (person1_id, person2_id)
  VALUES (2, 3);
    
/* use a JOIN to display a table showing people's names with their hobbies. */
SELECT persons.fullname, hobbies.name
 FROM persons
 JOIN hobbies
 ON persons.id = hobbies.person_id;
 
/* use another SELECT with a JOIN to show the names of each pair of friends, based on the data in the friends table. */
SELECT friend1.fullname, friend2.fullname    FROM friends
  JOIN persons friend1
  ON friend1.id = friends.person1_id
  JOIN persons friend2
  ON friend2.id = friends.person2_id;
