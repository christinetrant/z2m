-- Complex Queries
CREATE TABLE exercise_logs
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    minutes INTEGER,
    calories INTEGER,
    heart_rate INTEGER);

INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('biking', 30, 100, 110);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('biking', 10, 30, 105);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('dancing', 15, 200, 120);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('tree climbing', 30, 70, 90);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('tree climbing', 25, 72, 80);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('rowing', 30, 70, 90);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ('hiking', 60, 80, 85);

SELECT * FROM exercise_logs;

-- MORE COMPLEX QUEIRES WITH AND/OR
/* Find out what activities burn most calories */
SELECT * FROM exercise_logs WHERE calories > 50 ORDER BY calories;

/* Which activities have burned more than 50 cal but less than 30 minutes */
/* AND */
SELECT * FROM exercise_logs WHERE calories > 50 AND minutes < 30;

/* OR */
SELECT * FROM exercise_logs WHERE calories > 50 OR heart_rate > 100;

-- QUERYING IN SUBQUERIES
/* Select all outdoor activities an easier way is to use IN*/
SELECT * FROM exercise_logs WHERE type = "biking" OR type = "hiking" OR type = "tree climbing" OR type = "rowing";
/* IN */
SELECT * FROM exercise_logs WHERE type IN ("biking", "hiking", "tree climbing", "rowing");
 /* NOT IN (INVERSE QUERY) - e.g. to get indoor activities */
 SELECT * FROM exercise_logs WHERE type NOT IN ("biking", "hiking", "tree climbing", "rowing");


 CREATE TABLE drs_favorites
 (id INTEGER PRIMARY KEY,
 type TEXT,
 reason TEXT);

INSERT INTO drs_favorites(type, reason) VALUES ("biking", "Improves endurance and flexibility.");
INSERT INTO drs_favorites(type, reason) VALUES ("hiking", "Increases cardiovascular health.");

/*Gets the doctors favorite activities*/
SELECT type FROM drs_favorites;
/* If we want to get the doctors favorite activities from our original table we can do: */
SELECT * FROM exercise_logs WHERE type IN (
    SELECT type FROM drs_favorites);
/* This means that if the drs table gets updated we still get the right info in our exercise table */

/* LIKE */
SELECT * FROM exercise_logs WHERE type IN (
    SELECT type FROM drs_favorites WHERE reason = "Increases cardiovasular healt"); 
    -- this is spelt wrong so won't return a match but if we use LIKE instead of = then it will show

SELECT * FROM exercise_logs WHERE type IN (
    SELECT type FROM drs_favorites WHERE reason LIKE " %cardiovasular%"); 
    -- % on either side means anything can be on either side.

-- RESTRICTING GROUPED RESULTS WITH HAVING
/* AGGREGATE QUERY */
/* Find out how many calories burned for each type of activity */
SELECT type, SUM(calories) FROM exercise_logs GROUP BY type;
/* To change the name of the column instead of SUM(calories) we use AS */
/* AS */
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY type;

/* Filter to find activities that have burned 150 cals total (across all the logs) in an exercise */
/* HAVING */
SELECT type, SUM(calories) AS total_calories FROM exercise_logs 
    GROUP BY type
    HAVING total_calories > 150;
/* AVG calories for all exercise where we burn more than 70 */
SELECT type, AVG(calories) AS avg_calories FROM exercise_logs 
    GROUP BY type
    HAVING avg_calories > 70;
/* To select exercise type that has been logged more than once */
SELECT type FROM exercise_logs GROUP BY type HAVING COUNT(*) >=2;

-- CALCULATING RESULTS
/* Find out if heart rate ever goes over max */
SELECT COUNT(*) FROM exercise_logs WHERE heart_rate > 220 - 30;
/* Check if it's in target heart rate zone 50-90%*/
SELECT COUNT(*) FROM exercise_logs WHERE 
    heart_rate >= ROUND(0.50 * (220-30))
    AND heart_rate <= ROUND(0.90 * (220-30));

/* But what about the others - we want a summary of each heart rate zone and a custom column  */
/* CASE */
/* Similar to an if or switch statement */
SELECT type, heart_rate 
    CASE 
        WHEN heart_rate > 220-30 THEN "above max"
        WHEN heart_rate > ROUND(0.90 * (220-30)) THEN "above target"
        WHEN heart_rate > ROUND(0.50 * (220-30)) THEN "within target"
        ELSE "below target"
    END AS "hr_zone"
FROM exercise_logs;

/* using above statement we can find out which activites were in which zone */
SELECT COUNT(*),
    CASE 
        WHEN heart_rate > 220-30 THEN "above max"
        WHEN heart_rate > ROUND(0.90 * (220-30)) THEN "above target"
        WHEN heart_rate > ROUND(0.50 * (220-30)) THEN "within target"
        ELSE "below target"
    END AS "hr_zone"
FROM exercise_logs
GROUP BY hr_zone;

-- EXERCISES
-- CHALLENGE: KARAOKE SONG SELECTOR (AND / OR)
CREATE TABLE songs (
    id INTEGER PRIMARY KEY,
    title TEXT,
    artist TEXT,
    mood TEXT,
    duration INTEGER,
    released INTEGER);
    
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("Bohemian Rhapsody", "Queen", "epic", 60, 1975);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("Let it go", "Idina Menzel", "epic", 227, 2013);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("I will survive", "Gloria Gaynor", "epic", 198, 1978);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("Twist and Shout", "The Beatles", "happy", 152, 1963);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("La Bamba", "Ritchie Valens", "happy", 166, 1958);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("I will always love you", "Whitney Houston", "epic", 273, 1992);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("Sweet Caroline", "Neil Diamond", "happy", 201, 1969);
INSERT INTO songs (title, artist, mood, duration, released)
    VALUES ("Call me maybe", "Carly Rae Jepsen", "happy", 193, 2011);

/* Select all song titles */
SELECT title FROM songs;

/* Show songs that have an 'epic' mood or a release date after 1990 */
SELECT title FROM songs WHERE mood = 'epic' OR released > 1990;

/* Show titles that are 'epic' and released after 1990 and less than 4 minutes long */
SELECT title FROM songs WHERE mood = 'epic' AND released > 1990 AND duration < 240;
    
-- CHALLENGE: PLAYLIST MAKER (IN)
CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    genre TEXT);

INSERT INTO artists (name, country, genre)
    VALUES ("Taylor Swift", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Led Zeppelin", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("ABBA", "Sweden", "Disco");
INSERT INTO artists (name, country, genre)
    VALUES ("Queen", "UK", "Rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Celine Dion", "Canada", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Meatloaf", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Garth Brooks", "US", "Country");
INSERT INTO artists (name, country, genre)
    VALUES ("Shania Twain", "Canada", "Country");
INSERT INTO artists (name, country, genre)
    VALUES ("Rihanna", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Guns N' Roses", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Gloria Estefan", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Bob Marley", "Jamaica", "Reggae");

CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    title TEXT);

INSERT INTO songs (artist, title)
    VALUES ("Taylor Swift", "Shake it off");
INSERT INTO songs (artist, title)
    VALUES ("Rihanna", "Stay");
INSERT INTO songs (artist, title)
    VALUES ("Celine Dion", "My heart will go on");
INSERT INTO songs (artist, title)
    VALUES ("Celine Dion", "A new day has come");
INSERT INTO songs (artist, title)
    VALUES ("Shania Twain", "Party for two");
INSERT INTO songs (artist, title)
    VALUES ("Gloria Estefan", "Conga");
INSERT INTO songs (artist, title)
    VALUES ("Led Zeppelin", "Stairway to heaven");
INSERT INTO songs (artist, title)
    VALUES ("ABBA", "Mamma mia");
INSERT INTO songs (artist, title)
    VALUES ("Queen", "Bicycle Race");
INSERT INTO songs (artist, title)
    VALUES ("Queen", "Bohemian Rhapsody");
INSERT INTO songs (artist, title)
    VALUES ("Guns N' Roses", "Don't cry");
    
/* Select all song titles by Queen */ 
SELECT title FROM songs WHERE artist = "Queen";

/* select the name of all of the artists from the 'Pop' genre */
SELECT name FROM artists WHERE genre = "Pop";

/* select the title of all the songs from the 'Pop' artists. It should use IN on a nested subquery that's based on your previous query. */
SELECT title FROM songs WHERE artist IN (
SELECT name FROM artists WHERE genre = "Pop");


-- CHALLENGE: THE WORDIEST AUTHOR (HAVING)
CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT,
    title TEXT,
    words INTEGER);
    
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 79944);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 85141);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Prisoner of Azkaban", 107253);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Goblet of Fire", 190637);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Order of the Phoenix", 257045);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Half-Blood Prince", 168923);
INSERT INTO books (author, title, words)
    VALUES ("J.K. Rowling", "Harry Potter and the Deathly Hallows", 197651);

INSERT INTO books (author, title, words)
    VALUES ("Stephenie Meyer", "Twilight", 118501);
INSERT INTO books (author, title, words)
    VALUES ("Stephenie Meyer", "New Moon", 132807);
INSERT INTO books (author, title, words)
    VALUES ("Stephenie Meyer", "Eclipse", 147930);
INSERT INTO books (author, title, words)
    VALUES ("Stephenie Meyer", "Breaking Dawn", 192196);
    
INSERT INTO books (author, title, words)
    VALUES ("J.R.R. Tolkien", "The Hobbit", 95022);
INSERT INTO books (author, title, words)
    VALUES ("J.R.R. Tolkien", "Fellowship of the Ring", 177227);
INSERT INTO books (author, title, words)
    VALUES ("J.R.R. Tolkien", "Two Towers", 143436);
INSERT INTO books (author, title, words)
    VALUES ("J.R.R. Tolkien", "Return of the King", 134462);
 

/* select all the authors who have written more than 1 million words, using GROUP BY and HAVING. Your results table should include the 'author' and their total word count as a 'total_words' column. */
SELECT author, SUM(words) AS total_words FROM books 
GROUP BY author
HAVING total_words > 1000000;

/* select all the authors that write more than an average of 150,000 words per book. Your results table should include the 'author' and average words as an 'avg_words' column. */
SELECT author, AVG(words) AS avg_words FROM books
GROUP BY author
HAVING avg_words > 150000;



-- CHALLENGE: GRADEBOOK (CASE)
CREATE TABLE student_grades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    number_grade INTEGER,
    fraction_completed REAL);
    
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Winston", 90, 0.805);
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Winnefer", 95, 0.901);
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Winsteen", 85, 0.906);
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Wincifer", 66, 0.7054);
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Winster", 76, 0.5013);
INSERT INTO student_grades (name, number_grade, fraction_completed)
    VALUES ("Winstonia", 82, 0.9045);
    
/* select all of the rows, and display the name, number_grade, and percent_completed, which you can compute by multiplying and rounding the fraction_completed column. */

SELECT name, number_grade, ROUND(fraction_completed * 100) AS percent_completed
FROM student_grades;

/* The goal is a table that shows how many students have earned which letter_grade. You can output the letter_grade by using CASE with the number_grade column, outputting 'A' for grades > 90, 'B' for grades > 80, 'C' for grades > 70, and 'F' otherwise. Then you can use COUNT with GROUP BY to show the number of students with each of those grades. */

SELECT COUNT(*),
    CASE
    WHEN number_grade > 90 THEN "A"
    WHEN number_grade > 80 THEN "B"
    WHEN number_grade > 70 THEN "C"
    ELSE "F"
    END AS "letter_grade"
FROM student_grades
GROUP BY letter_grade;





--PROJECT: DATA DIG
/* Put your data in here and query it! */
/* Marvel Heroes and Villains
 Based on the website http://marvel.wikia.com/Main_Page
 with popularity data from http://observationdeck.io9.com/something-i-found-marvel-character-popularity-poll-cb-1568108064 
 and power grid data from http://marvel.wikia.com/Power_Grid#Power
 Collected by: https://www.khanacademy.org/profile/Mentrasto/
 */

CREATE TABLE marvels (ID INTEGER PRIMARY KEY,
    name TEXT,
    popularity INTEGER,
    alignment TEXT,
    gender TEXT, 
    height_m NUMERIC,
    weight_kg NUMERIC,
    hometown TEXT,
    intelligence INTEGER,
    strength INTEGER,
    speed INTEGER,
    durability INTEGER,
    energy_Projection INTEGER,
    fighting_Skills INTEGER);
    
INSERT INTO marvels VALUES(1, "Spider Man", 1, "Good", "Male", 1.78, 75.75, "USA", 4, 4, 3, 3, 1, 4); 
INSERT INTO marvels VALUES(2, "Iron Man", 20, "Neutral", "Male", 1.98, 102.58, "USA", 6, 6, 5, 6, 6, 4); 
INSERT INTO marvels VALUES(3, "Hulk", 18, "Neutral", "Male", 2.44, 635.29, "USA", 1, 7, 3, 7, 5, 4); 
INSERT INTO marvels VALUES(4, "Wolverine", 3, "Good", "Male", 1.6, 88.46, "Canada", 2, 4, 2, 4, 1, 7);
INSERT INTO marvels VALUES(5, "Thor", 5, "Good", "Male", 1.98, 290.3, "Asgard", 2, 7, 7, 6, 6, 4);
INSERT INTO marvels VALUES(6, "Green Goblin", 91, "Bad", "Male", 1.93, 174.63, "USA", 4, 4, 3, 4, 3, 3);
INSERT INTO marvels VALUES(7, "Magneto", 11, "Neutral", "Male", 1.88, 86.18, "Germany", 6, 3, 5, 4, 6, 4);
INSERT INTO marvels VALUES(8, "Thanos", 47, "Bad", "Male", 2.01, 446.79, "Titan", 6, 7, 7, 6, 6, 4);
INSERT INTO marvels VALUES(9, "Loki", 32, "Bad", "Male", 1.93, 238.14, "Jotunheim", 5, 5, 7, 6, 6, 3);
INSERT INTO marvels VALUES(10, "Doctor Doom", 19, "Bad", "Male", 2.01, 188.24, "Latveria", 6, 4, 5, 6, 6, 4);
INSERT INTO marvels VALUES(11, "Jean Grey", 8, "Good", "Female", 1.68, 52.16, "USA", 3, 2, 7, 7, 7, 4);
INSERT INTO marvels VALUES(12, "Rogue", 4, "Good", "Female", 1.73, 54.43, "USA", 7, 7, 7, 7, 7, 7);
INSERT INTO Marvels VALUES(13, "Storm", 2, "Good", "Female", 1.80, 66, "Kenya", 2, 2, 3, 2, 5, 4);
INSERT INTO Marvels VALUES(14, "Nightcrawler", 6, "Good", "Male", 1.75, 73, "Germany", 3, 2, 7, 2, 1, 3);
INSERT INTO Marvels VALUES(15, "Gambit", 7, "Good", "Male", 1.88, 81, "EUA", 2, 2, 2, 2, 2, 4);
INSERT INTO Marvels VALUES(16, "Captain America", 9, "Good", "Male", 1.88, 108, "EUA", 3, 3, 2, 3, 1, 6);
INSERT INTO Marvels VALUES(17, "Cyclops", 10, "Good", "Male", 1.90, 88, "EUA", 3, 2, 2, 2, 5, 4);
INSERT INTO Marvels VALUES(18, "Emma Frost", 12, "Neutral", "Female", 1.78, 65, "EUA", 4, 4, 2, 5, 5, 3);
INSERT INTO Marvels VALUES(19, "Kitty Pryde", 13, "Good", "Female", 1.68, 50, "EUA", 4, 2, 2, 3, 1, 5);
INSERT INTO Marvels VALUES(20, "Daredevil", 14, "Good", "Male", 1.83, 91, "EUA", 3, 3, 2, 2, 4, 5);
INSERT INTO Marvels VALUES(21, "Punisher", 50, "Neutral", "Male", 1.85, 91, "EUA", 3, 3, 2, 2, 1, 6);
INSERT INTO Marvels VALUES(22, "Silver Surfer", 33, "Good", "Male", 1.93, 102, "Zenn-La", 3, 7, 7, 6, 7, 2);
INSERT INTO Marvels VALUES(23, "Ghost Rider", 86, "Good", "Male", 1.88, 99, "EUA", 2, 4, 3, 5, 4, 2);
INSERT INTO Marvels VALUES(24, "Venon", 78, "Neutral", "Male", 1.90, 118, "EUA", 3, 4, 2, 6, 1, 4);
INSERT INTO Marvels VALUES(25, "Juggernaut", 76, "Neutral", "Male", 2.87, 862, "EUA", 2, 7, 2, 7, 1, 4);
INSERT INTO Marvels VALUES(26, "Professor X", 58, "Good", "Male", 1.83, 86, "EUA", 5, 2, 2, 2, 5, 3);


/* What are average, max, and min values in the data? */
SELECT name, MAX(strength) AS max_strength FROM Marvels;

SELECT name, MIN(height_m) AS min_height FROM Marvels GROUP BY height_m;

SELECT hometown, ROUND(AVG(intelligence)) AS avg_intelligence
FROM Marvels
GROUP BY hometown;

/* What about those numbers per category in the data (using HAVING)? */

SELECT name, MAX(strength) AS max_strength 
FROM Marvels
GROUP BY name
HAVING max_strength > 4 ;

/* What ways are there to group the data values that don’t exist yet (using CASE)? */
SELECT COUNT(*),
CASE 
WHEN popularity > 90 THEN "super cool"
WHEN popularity > 80 THEN "pretty cool"
WHEN popularity > 70 THEN "cool"
ELSE "Whatever they're still Marvel characters"
END AS "popularity_rating"
FROM Marvels
GROUP BY popularity_rating;


/* What interesting ways are there to filter the data (using AND/OR)? */
SELECT name, MAX(strength) AS max_strength 
FROM Marvels
GROUP BY name
HAVING max_strength > 4 AND name LIKE "%th%";
