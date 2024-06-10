CREATE DATABASE IF NOT EXISTS news_database;

USE news_database;

CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO articles (title, content) VALUES
('First Article', 'This is the content of the first article.'),
('Second Article', 'This is the content of the second article.');
