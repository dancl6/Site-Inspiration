-- DROP DATABASE IF EXISTS site_inspiration;

-- CREATE DATABASE site_inspiration;

DROP DATABASE site_inspiration_manual;

CREATE DATABASE site_inspiration_manual;
USE site_inspiration_manual;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reason;
DROP TABLE IF EXISTS quotes;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30),
  email VARCHAR(30),
  quotes_id INTEGER,
  user_password DECIMAL,
  CONSTRAINT fk_quotes FOREIGN KEY (quotes_id) REFERENCES quotes(id) ON DELETE SET NULL
);

CREATE TABLE reason (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  reason_tag VARCHAR(30),
  quotes_id INTEGER,
  CONSTRAINT fk_quotes FOREIGN KEY (quotes_id) REFERENCES quotes(id) ON DELETE SET NULL
);

CREATE TABLE quotes (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(30),
  quote VARCHAR(30),
);