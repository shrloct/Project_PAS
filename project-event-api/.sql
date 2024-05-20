create database project_event;

create table guru (
    id varchar(30) primary key not null,
    name varchar(60) not null,
    username varchar(20) not null,
    password varchar(20) not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
)

create table category (
    name varchar(30) not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
)
create table event (
    id varchar(30) primary key not null,
    id_guru varchar(30) not null,
    name varchar(60) not null,
    description varchar(100) not null,
    category varchar(30) not null,
    date datetime not null,
    location varchar(60) not null,
    max_participant int not null,
    status varchar(20) not null,
    email varchar(35) not null,
    foreign key (id_guru) references guru(id)
    foreign key (category) references category(name)
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
)
