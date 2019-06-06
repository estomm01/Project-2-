DROP DATABASE IF EXISTS petHappydb;
CREATE DATABASE petHappydb;
USE petHappydb;

CREATE TABLE petHappy (
	ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (ItemID)
  ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
  pet_name varchar(255) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY(ItemID)
);
