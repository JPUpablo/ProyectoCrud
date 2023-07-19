CREATE TABLE pacientes (
  nombre varchar(40) NOT NULL,
  apellido varchar(40) NOT NULL,
  cedula varchar(10) NOT NULL,
  edad varchar(2) NOT NULL,
  telefono varchar(10) NOT NULL,
  id int(5) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  UNIQUE KEY cedula (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci