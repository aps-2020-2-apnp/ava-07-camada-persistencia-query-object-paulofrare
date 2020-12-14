DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS pets;

CREATE TABLE usuarios (
  id        INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome      VARCHAR(20) NOT NULL CHECK(LENGTH(nome) >= 2),
  sobrenome VARCHAR(20)     NULL
);

CREATE TABLE pets (
  id        INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome      VARCHAR(20) NOT NULL CHECK(LENGTH(nome) >= 2),
  raca      VARCHAR(20) NOT NULL,
  tipo      VARCHAR(20) NOT NULL
);

INSERT INTO usuarios (nome, sobrenome)
VALUES ('Ricardo', 'Pereira');

INSERT INTO usuarios (nome, sobrenome)
VALUES ('Eduardo', 'Silveira');

INSERT INTO pets (nome, raca, tipo)
VALUES ('Jack', 'Vira Lata', "Gato");

INSERT INTO pets (nome, raca, tipo)
VALUES ('jonny', 'Vira Lata', "Cachorro");
