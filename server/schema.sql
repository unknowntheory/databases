DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
 
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  message varchar(255) NOT NULL,
  PRIMARY KEY (id)
 
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(255) NOT NULL,
  PRIMARY KEY (id)
  
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

