CREATE TABLE citas (
     id int(5) NOT NULL AUTO_INCREMENT,
     cedula varchar(10) NOT NULL,
     especialidad varchar(40) NOT NULL,
     doctor varchar(40) NOT NULL,
     PRIMARY KEY (`id`) 
) ENGINE = InnoDB AUTO_INCREMENT = 13 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci '