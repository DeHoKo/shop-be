--create table products (
--	id uuid primary key default uuid_generate_v4(),
--	title text not null,
--	description text,
--	image_url text,
--	price integer
--)

--drop table products;

--create table stocks (
--	id uuid primary key default uuid_generate_v4(),
--	product_id uuid,
--	count integer,
--	foreign key ("product_id") references "products" ("id")
--)

--drop table stocks;

--insert into products (title, description, image_url, price) values
--('Archery Dragon X8', 'short product description', 'https://m.media-amazon.com/images/I/6198P+HTtEL._AC_SL1500_.jpg', 120),
--('TD Recurve Bow', 'short product description', 'https://m.media-amazon.com/images/I/71SfOPqh4SL._AC_SL1500_.jpg', 80),
--('Pro Recurve Bow', 'short product description', 'https://m.media-amazon.com/images/I/71V5NyIOU+L._AC_SL1500_.jpg', 130),
--('STACCU Takedown Recurve', 'short product description', 'https://m.media-amazon.com/images/I/71D8dIWquTL._AC_SL1500_.jpg', 140),
--('PANDARUS Compound Bow', 'short product description', 'https://m.media-amazon.com/images/I/71lhDkAEdpL._AC_SL1500_.jpg', 60),
--('GENESIS Kit RH', 'short product description', 'https://m.media-amazon.com/images/I/71vRFVC10LL._AC_SL1500_.jpg', 90),
--('TOPARCHERY Archery', 'short product description', 'https://m.media-amazon.com/images/I/419+BwoDjcL._AC_SL1024_.jpg', 200),
--('SinoArt Compound Bow', 'short product description', 'https://m.media-amazon.com/images/I/61RWFkBVPNL._AC_SL1280_.jpg', 210)

--insert into stocks (product_id, count) values
--('cae1105f-2844-4991-ada0-b3c69e04a68f', 2),
--('66aed9c2-a753-41d2-bf5b-9461bd3e0618', 3),
--('7b47c5ae-08ea-4698-8e80-6fd0b0753a93', 6),
--('fc2dcba1-0515-4c15-b824-a280f1468263', 5),
--('0771ebce-1505-428d-9a37-3bae38a4742c', 2),
--('9ae2604a-ebbe-4110-ba13-b98103ae2aca', 1),
--('942137a7-238f-4213-afe5-0a879d54c347', 3),
--('aafa9af4-b943-4e60-91cc-ce6a588f7dc9', 9)

--create extension if not exists "uuid-ossp";