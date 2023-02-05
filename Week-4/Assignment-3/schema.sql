CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user(
    id integer PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);