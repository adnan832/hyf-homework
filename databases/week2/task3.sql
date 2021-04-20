USE hfy_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.id, user.name, user.email, task.title
from user
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
where user.email like "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select user.id, user.name, task.title, status.name as status
from user
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
join status on task.status_id = status.id
where user.name = "Donald Duck" and status.name = "not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.id, user.name, task.title, task.created
from user
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
where user.name = 'Maryrose Meadows' and month(created)= 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

select count(task.id) as total_task, month(created) as month
from task
group by month
order by month;