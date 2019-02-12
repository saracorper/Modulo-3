-- EJERCICIO 1.a
-- select first_name, last_name
-- from actor;

-- EJERCICIO 1.b
-- select upper(concat(first_name, ' ' ,last_name)) AS `Actor name`
-- from actor;

-- EJERCICIO 2.a
 -- select actor_id, first_name, last_name
--  from actor
--  where first_name = 'Joe';

-- EJERCICIO 2.b
-- select *
-- from actor
-- where last_name like '%GEN%';

-- EJERCICIO 2.c 
-- select *
--    from actor
--    where last_name like '%LI%'
--    order by last_name, first_name;

-- EJERCICIO 2.d 
-- 	select country_id, country
--     from country
--     where country IN ('Afghanistan', 'Bangladesh', 'China');   

-- EJERCICIO 3.a
-- alter table actor
-- add middle_name varchar(30)
-- after first_name;

-- EJERCICIO 3.b
-- alter table actor
-- modify column middle_name blob;

-- EJERCICIO 3.c
-- alter table actor
-- drop column middle_name;

-- EJERCICIO 4.a
-- select last_name, count(*)
-- from actor
-- group by last_name;

-- EJERCICIO 4.b


-- EJERCICIOS 4.b
-- select last_name, count(*)
-- from actor
-- group by last_name
-- having count(*) > 2;

-- EJERCICIO 4.c
-- update actor
-- set first_name = 'HARPO'
-- where first_name = 'GROUCHO' and last_name = 'WILLIAMS';

-- EJERCICIO 6.a
-- describe address;

-- EJERCICIO 5.b
-- select first_name, last_name, address
-- from staff as s
-- inner join address as a on s.address_id = a.address_id;

-- EJERCICIO 6.b
-- select sum(amount), first_name, last_name
-- from payment as p
-- inner join staff as s on p.staff_id = s.staff_id
-- where month(payment_date) = 8 and year(payment_date) = 2005
-- group by s.staff_id;

-- EJERCICIO 6.c
-- select title, count(*)
-- from film as f
-- inner join film_actor as fa on f.film_id = fa.film_id
-- group by f.film_id;

-- EJERCICIO 6.d
-- select f.film_id as fid, count(store_id) as tienda 
-- from inventory as i
-- inner join film as f on f.fil_id = i.film_id
-- where title ='Hunchback Impossible'
-- group by f.film_id;








 



 