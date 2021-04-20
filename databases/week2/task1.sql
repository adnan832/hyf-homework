USE hyf_lesson1;

-- Part 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task ( title, description, created, updated, due_date, status_id, user_id)
VALUES ('do week database homwork' , 'get help from githud hyf repo', '2021-04-11', '2021-04-13', '2021-04-21', 2, 10);

-- Change the title of a task
UPDATE task
SET title = "do week2 database homework"
WHERE id=36;

-- Change a task due date
UPDATE task
SET due_date = "2021-04-23"
WHERE id=36;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id=36;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id=36;

-- Delete a task
DELETE from task
WHERE id=36;




