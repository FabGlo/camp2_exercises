--# Joins

--1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.
select first_name, last_name, department_id, departments.name
from employees
inner join departments on (departments.id=employees.department_id);

--2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.
select first_name, last_name, departments.name, locations.city, locations.state_province
from employees
inner join departments on (departments.id=employees.department_id)
inner join locations on (locations.id=departments.location_id);

--3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.
select first_name, last_name, salary,job_grades.level 
from employees
inner join job_grades on (employees.salary > job_grades.lowest_salary and employees.salary < highest_salary);

--4. Write a query in SQL to display the first name, last name, department number and department name, for all employees
--for departments 8 or 4.
select first_name, last_name, department_id, departments.name
from employees
inner join departments on (departments.id=employees.department_id)
where employees.department_id in (4,8);

--5. Write a query in SQL to display those employees who contain a letter z to their first name and also display their
--last name, department, city, and state province.
select first_name, last_name, departments.name, locations.city, locations.state_province
from employees
inner join departments on (departments.id=employees.department_id)
inner join locations on (locations.id=departments.location_id)
where employees.first_name like '%z%';

--6. Write a query in SQL to display all departments including those where does not have any employee.
select distinct(departments.name)
from employees
right join departments on (departments.id=employees.department_id);


--7. Write a query in SQL to display the first and last name and salary for those employees who earn less than the
--employee earn whose number is 83.
select e1.first_name, e1.last_name, e1.salary
from employees
inner join employees e1 on (employees.id='83')
where employees.salary > e1.salary;

--8. Write a query in SQL to display the first name of all employees including the first name of their manager.
select employees.first_name, e1.first_name
from employees
inner join employees e1 on (e1.id=employees.manager_id);

--9. Write a query in SQL to display the department name, city, and state province for each department.
select name,locations.city, locations.state_province
from departments
inner join locations on (locations.id=departments.location_id);

--10. Write a query in SQL to display the first name, last name, department number and name, for all employees who have or
--have not any department.
select first_name, last_name, department_id, departments.name
from employees
left join departments on (departments.id=employees.department_id);

--11. Write a query in SQL to display the first name of all employees and the first name of their manager including those
--who does not working under any manager.
select employees.first_name, e1.first_name
from employees
left join employees e1 on (e1.id=employees.manager_id);

--12. Write a query in SQL to display the first name, last name, and department number for those employees who work in the
--same department as the employee who hold the last name as Taylor.
select employees.first_name, employees.department_id
from employees
inner join employees e1 on (e1.last_name='Taylor')
where employees.department_id=e1.department_id;

--13. Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and
--starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.
select concat(first_name,' ',last_name) as fullname, jobs.title, departments.name
from employees
inner join departments on (departments.id=employees.department_id)
inner join jobs on (jobs.id=employees.job_id)
inner join job_history on (job_history.employee_id=employees.id)
where job_history.start_date>'1993-01-01' and job_history.end_date<'1997-08-31';

--14. Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between
--maximum salary for the job and salary of the employee.
select concat(first_name,' ',last_name) as fullname, jobs.title,(jobs.max_salary-jobs.min_salary) as differencesalaryjob
from employees
inner join jobs on (jobs.id=employees.job_id);

--15. Write a query in SQL to display the name of the department, average salary and number of employees working in that
--department who got commission.
select count(*), avg(salary), departments.name
from employees
inner join departments on (departments.id=employees.department_id)
where commission_pct>0
group by departments.name;

--16. Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees
--who is working in the department which ID is 8.
select concat(first_name,' ',last_name) as fullname, jobs.title
from employees
inner join jobs on (employees.job_id=jobs.id)
where employees.department_id=8;

--17. Write a query in SQL to display the name of the country, city, and the departments which are running there.
select countries.name, locations.city, departments.name
from departments
inner join locations on (locations.id=departments.location_id)
inner join countries on (countries.id=locations.country_id);

--18. Write a query in SQL to display department name and the full name (first and last name) of the manager.
select departments.name, concat(employees.first_name,' ',employees.last_name) as fullname
from departments
inner join employees on (employees.id=departments.manager_id);

--19. Write a query in SQL to display job title and average salary of employees.
select avg(employees.salary), jobs.title
from employees
inner join jobs on (jobs.id=employees.job_id)
group by jobs.title;

--20. Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning
--a salary on and above 12000.
select jobs.id, jobs.code,jobs.title, concat(employees.first_name,' ',employees.last_name) as fullname, employees.salary
from employees
inner join job_history on (job_history.employee_id=employees.id)
inner join jobs on (job_history.job_id=jobs.id)
where employees.salary>=12000;

--21. Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.
select departments.name, concat(employees.first_name,' ',employees.last_name) as fullname, locations.city
from departments
inner join employees on (employees.id=departments.manager_id)
inner join locations on (locations.id=departments.location_id);
 
--22. Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department
--8.
select employees.id, jobs.title, (job_history.end_date - job_history.start_date) as duration
from employees
inner join jobs on (jobs.id=employees.job_id)
left join job_history on (job_history.employee_id=employees.id)
where employees.department_id=8;

--23. Write a query in SQL to display the full name (first and last name), and salary of those employees who working in
--any department located in London.
select concat(employees.first_name,' ',employees.last_name) as fullname, employees.salary
from employees
inner join departments on (departments.id=employees.department_id)
inner join locations on (locations.id=departments.location_id)
where locations.city='London';

--24. Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for
--those employees with worked without a commission percentage.
select concat(employees.first_name,' ',employees.last_name) as fullname, jobs.title, max(job_history.start_date),max(job_history.end_date)
from employees
inner join jobs on (jobs.id=employees.job_id)
left join job_history on (job_history.employee_id=employees.id)
where employees.commission_pct=0.0
group by concat(employees.first_name,' ',employees.last_name),jobs.title ;


--25. Write a query in SQL to display the department name and number of employees in each of the department.
select departments.name, count(employees.*)
from departments
inner join employees on (employees.department_id=departments.id)
group by departments.name;

--26. Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country
--presently where (s)he is working.
select concat(employees.first_name,' ',employees.last_name) as fullname, countries.id, countries.name
from employees
inner join departments on (departments.id=employees.department_id)
inner join locations on (locations.id= departments.location_id)
inner join countries on (countries.id=locations.country_id);
