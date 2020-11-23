INSERT INTO users (username, email, user_password)
VALUES
('Jake','jake@google.com','1234'),
('Joe','joe@yahoo.com','1234'),
('Mike','mike@yahoo.com','1234');

INSERT INTO reason (reason_tag)
VALUES
('happy-family');

INSERT INTO quotes (author, quote, reason_id, users_id)
VALUES
('David Hawkins', 'Become the field.','1', '3' );
