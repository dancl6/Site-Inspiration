DROP DATABASE IF EXISTS site_inspiration_manual;

CREATE DATABASE site_inspiration_manual;
USE site_inspiration_manual;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reason;
DROP TABLE IF EXISTS quotes;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30),
  email VARCHAR(30),
  user_password DECIMAL
);

CREATE TABLE reason (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  reason_tag VARCHAR(30)
);

CREATE TABLE quotes (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(30),
  quote VARCHAR(30),
  reason_id INTEGER,
  users_id INTEGER,
  CONSTRAINT fk_reason FOREIGN KEY (reason_id) REFERENCES reason(id) ON DELETE SET NULL,
  CONSTRAINT fk_users FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE SET NULL
);