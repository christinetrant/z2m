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
