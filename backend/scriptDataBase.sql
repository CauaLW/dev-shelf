CREATE DATABASE devshelf;

create table book (
    id serial primary key unique not null,
    title varchar(50) unique not null,
    writer varchar(50) not null,
    year smallint not null,
    pages smallint not null
);