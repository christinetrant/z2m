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

SELECT * FROM exercise_logs;

/* Find out what activities burn most calories */
SELECT * FROM exercise_logs WHERE calories > 50 ORDER BY calories;

/* Which activities have burned more than 50 cal but less than 30 minutes */
/* AND */
SELECT * FROM exercise_logs WHERE calories > 50 AND minutes < 30;

/* OR */
SELECT * FROM exercise_logs WHERE calories > 50 OR heart_rate > 100;

-- EXERCISE
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
    