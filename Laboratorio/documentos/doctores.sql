CREATE TABLE `doctores` (
    nombre varchar(40) NOT NULL,
    apellido varchar(40) NOT NULL,
    cedula varchar(10) NOT NULL,
    especialidad varchar(40) NOT NULL,
    consultorio varchar(3) NOT NULL,
    email varchar(50) NOT NULL,
    id int(5) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    UNIQUE KEY 'cedula'(cedula)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci '