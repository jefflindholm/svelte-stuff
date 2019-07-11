-- Up
create table blog_post (
  id SERIAL PRIMARY key,
  title TEXT,
  tags TEXT,
  post TEXT,
  created timestamp,
  updated timestamp
);
-- Down
drop table blog_post;
