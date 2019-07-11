-- Up
create table blog_comment (
  id SERIAL PRIMARY key,
  blog_id int,
  author TEXT,
  tags TEXT,
  post TEXT,
  created timestamp,
  FOREIGN KEY(blog_id) REFERENCES blog_post(id)
);
-- Down
drop table blog_comment;
