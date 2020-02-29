CREATE DATABASE IF NOT EXISTS qa;

USE qa;

create table questions (
  id serial primary key,
  question_body varchar(255) not null,
  question_date timestamp default current_timestamp,
  asker_name varchar(64) not null,
  asker_email varchar(64) not null,
  question_helpfulness int default 0 not null,
  reported int default 0 not null,
  product_id int not null
);
​
create table answers (
  id serial primary key,
  body text not null ,
  answer_date timestamp default current_timestamp not null,
  answerer_name varchar(64) not null,
  email varchar(64) not null,
  helpfulness int default 0 not null,
  reported int default 0 not null,
  question_id int not null references questions (id)
);
  -- photos text[5],
​
create table photos (
  id serial primary key,
  url varchar(255) not null,
  answer_id int not null 
  references answers (id)
);
