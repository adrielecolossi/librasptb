
CREATE TABLE jogador(
      id SERIAL NOT NULL PRIMARY KEY,
      email VARCHAR(200) NOT NULL, 
      datahoracadastro date NOT NULL DEFAULT current_timestamp check (datahoracadastro <= current_timestamp),
      senha VARCHAR(30) NOT NULL check(length(senha)>=6),  --e menor igual a 30
      nome VARCHAR(500) NOT NULL,
      genero CHAR(1) NOT NULL check (genero = 'M' or genero = 'F' or genero = 'O'),
      minigamesjogados VARCHAR(6) DEFAULT 0,  --botando um milhão porque vai que né
      minigamesvencidos VARCHAR(6) DEFAULT 0

);


CREATE TABLE categoria(
      id SERIAL NOT NULL PRIMARY KEY,
      nome VARCHAR(200) NOT NULL,
      midia VARCHAR(200)
);

CREATE TABLE midia(
      id SERIAL NOT NULL PRIMARY KEY,
      url VARCHAR(200) NOT NULL,
	  nome VARCHAR(200) NOT NULL,
	  tipo VARCHAR(60) NOT NULL,
	  descricao VARCHAR(200) NOT NULL
	
 );

CREATE TABLE questao(
      id SERIAL NOT NULL PRIMARY KEY
);

CREATE TABLE ordenar(
      frase VARCHAR(300) NOT NULL
) INHERITS (questao);

CREATE TABLE completar(
      frase VARCHAR(300) NOT NULL,
      opcao1 varchar(70),
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70)
) INHERITS (questao);


CREATE TABLE marcar(
      opcao1 varchar(70), --é a opção correta
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70)
) INHERITS (questao);


CREATE TABLE associar(
      opcao1 varchar(70),
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70)
) INHERITS (questao);

CREATE TABLE preencherdigitando(
      frase VARCHAR(300) NOT NULL,
      resposta varchar(40)
) INHERITS (questao);

CREATE TABLE preencheralternativa(
      frase VARCHAR(300) NOT NULL,
      opcao1 varchar(70),
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70)
) INHERITS (questao);

CREATE TABLE digitarmidia(
      resposta varchar(40)
) INHERITS (questao);

CREATE TABLE questaomidiacategoria(
      questao INTEGER NOT NULL,
      categoria INTEGER NOT NULL,
      midia INTEGER NOT NULL,
      FOREIGN KEY (questao) REFERENCES questao(id),
      FOREIGN KEY (categoria) REFERENCES categoria(id),
      FOREIGN KEY (midia) REFERENCES midia(id),
	PRIMARY KEY(questao, categoria)
);

CREATE TABLE midiacategoria(
      categoria INTEGER NOT NULL,
      midia INTEGER NOT NULL,
      FOREIGN KEY (categoria) REFERENCES categoria(id),
      FOREIGN KEY (midia) REFERENCES midia(id),
	PRIMARY KEY(categoria, midia)
);

CREATE TABLE historico(
      jogador VARCHAR(200) NOT NULL, 
      questao INTEGER NOT NULL,
      datahoraquestao Timestamp without Time Zone DEFAULT current_timestamp   NOT NULL check (datahoraquestao <= current_timestamp),--mostra a data que a questão foi jogada 
      FOREIGN KEY (jogador) REFERENCES jogador(email),
      FOREIGN KEY (questao) REFERENCES questao(id)
      PRIMARY KEY(jogador, questao)
);
