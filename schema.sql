
-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;


-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;


DROP DATABASE IF EXISTS petHappydb;
CREATE DATABASE petHappydb;
USE petHappydb;

CREATE TABLE users (
   id MEDIUMINT AUTO_INCREMENT NOT NULL,
   user_name VARCHAR(15) NOT NULL,
   phone_number INTEGER(255) NOT NULL,
   zip_code INTEGER(6) NOT NULL,
   email VARCHAR(100) NOT NULL,
   pswd VARCHAR(255) NOT NULL,
   createdAt DATETIME 'YYYY-MM-DD hh:mm:ss' NOT NULL,
   updatedAt DATETIME 'YYYY-MM-DD hh:mm:ss' NOT NULL,
   PRIMARY KEY (id)
);


DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;



-- CREATE TABLE petHappy (
-- 	ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
-- 	burger_name varchar(255) NOT NULL,
--     devoured boolean NOT NULL,
-- 	PRIMARY KEY (ItemID)
--   ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
--   pet_name varchar(255) NOT NULL,
--   devoured boolean NOT NULL,
--   PRIMARY KEY(ItemID)
-- );

DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
