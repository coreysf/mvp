CREATE DATABASE translations;

USE translations;

CREATE TABLE it_passport (
  id INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(3),
  country_code VARCHAR(5),
  passport_no INT(15),
  surnames VARCHAR(50),
  given_names VARCHAR(50),
  nationality VARCHAR(30),
  dob VARCHAR(30),
  gender VARCHAR(3),
  place_of_birth VARCHAR(50),
  date_of_issue VARCHAR(30),
  authority VARCHAR(255),
  date_of_expiration VARCHAR(30),
  footer1 VARCHAR(255),
  footer2 VARCHAR(255),
  FOREIGN KEY (userID) REFERENCES users(id),
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE mx_passport (
  id INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(3),
  country_code VARCHAR(5),
  passport_no INT(15),
  surnames VARCHAR(50),
  given_names VARCHAR(50),
  nationality VARCHAR(30),
  curp VARCHAR(50),
  dob VARCHAR(30),
  gender VARCHAR(3),
  place_of_birth VARCHAR(50),
  date_of_issue VARCHAR(30),
  date_of_expiration VARCHAR(30),
  authority VARCHAR(255),
  remarks VARCHAR(255),
  footer1 VARCHAR(255),
  footer2 VARCHAR(255),
  FOREIGN KEY (userID) REFERENCES users(id),
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username - VARCHAR(40),
  password - VARCHAR(255),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

