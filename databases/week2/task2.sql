-- Part 2: School database

create database School;
use School;

CREATE table Class (
id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(255) NOT NULL,
begins DATETIME NOT NULL DEFAULT NOW(),
ends DATETIME NOT NULL DEFAULT NOW()
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table Student(
id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(255) NOT NULL,
email varchar(255) NOT NULL UNIQUE,
phone varchar(50),
class_id int unsigned,
foreign key (class_id) references Class(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create index name
on student (name);

alter table class
add status enum('not-started','ongoing','finished');
