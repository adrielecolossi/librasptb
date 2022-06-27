const { query } = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const db = require("../infra/database");
const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
var md5 = require("md5");

exports.saveQuestaoDigitarMidia = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );
  if (questao.categoria == undefined) {
    questao.categoria = 1;
  }
  result3 = await db.query(
    "insert into digitarmidia(questao, resposta) values ('" +
      result.rows[0].id +
      "','" +
      questao.resposta +
      "')"
  );
  result3 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );
  result2 = await db.query(
    "insert into midia(url) values ('" + questao.midia + "') RETURNING id; "
  );
  result4 = await db.query(
    "insert into questaomidia(questao, midia) values ('" +
      result.rows[0].id +
      "', '" +
      result2.rows[0].id +
      "');"
  );
};

exports.saveQuestaoOrdenarFrase = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );
  if (questao.categoria == undefined) {
    questao.categoria = 1;
  }

  result3 = await db.query(
    "insert into ordenar(questao, frase) values ('" +
      result.rows[0].id +
      "','" +
      questao.resposta +
      "')"
  );
  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};

exports.saveQuestaoFraseCorreta = async function (questao) {
  /*
CREATE TABLE frasecorreta(
       questao INTEGER NOT NULL,
      opcao1 varchar(300),
      opcao2 varchar(300),
      opcao3 varchar(300),
      opcao4 varchar(300),
      opcao5 varchar(300),
      FOREIGN KEY (questao) REFERENCES questao(id)
)
*/
console.log(questao)
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );
 
  result3 = await db.query(
    "insert into frasecorreta(questao, opcao1, opcao2, opcao3, opcao4, opcao5) values ('" +
      result.rows[0].id +
      "','" +
      questao.alternativaCerta +
      "','" +
      questao.alternativaErrada1 +
      "','" +
      questao.alternativaErrada2 +
      "','" +
      questao.alternativaErrada3 +
      "','" +
      questao.alternativaErrada4 +
      "');"
  );

  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};

exports.saveQuestaoMarcarLacuna = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );
  if (questao.categoria == undefined) {
    questao.categoria = 1;
  }

  /*
  CREATE TABLE completar(
        questao INTEGER NOT NULL,
      frase VARCHAR(300) NOT NULL,
      opcao1 varchar(70),
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70),
         
);
*/
  result3 = await db.query(
    "insert into completar(questao, frase, opcao1, opcao2, opcao3, opcao4, opcao5) values ('" +
      result.rows[0].id +
      "','" +
      questao.frase +
      "','" +
      questao.alternativaCerta +
      "','" +
      questao.alternativaErrada1 +
      "','" +
      questao.alternativaErrada2 +
      "','" +
      questao.alternativaErrada3 +
      "','" +
      questao.alternativaErrada4 +
      "')"
  );
  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};


exports.saveQuestaoMarcarMidia = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );

  /*
 CREATE TABLE marcar(
       questao INTEGER NOT NULL,
      opcao1 varchar(70), --é a opção correta
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70),
      FOREIGN KEY (questao) REFERENCES questao(id)
);
*/
  result3 = await db.query(
    "insert into marcar(questao, opcao1, opcao2, opcao3, opcao4, opcao5) values ('" +
      result.rows[0].id +
      "','" +
      questao.alternativaCerta +
      "','" +
      questao.alternativaErrada1 +
      "','" +
      questao.alternativaErrada2 +
      "','" +
      questao.alternativaErrada3 +
      "','" +
      questao.alternativaErrada4 +
      "')"
  );
  result2 = await db.query(
    "insert into midia(url) values ('" + questao.midia + "') RETURNING id; "
  );
  result5 = await db.query(
    "insert into questaomidia(questao, midia) values ('" +
      result.rows[0].id +
      "', '" +
      result2.rows[0].id +
      "');"
  );
  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};

/*
http://localhost:3001/questaoDigitarLacuna", {
          token,
          frase: fraseQuestao,
          resposta: palavraQuestao,
          categoria: categoriaQuestao
          
          CREATE TABLE preencherdigitando(
        questao INTEGER NOT NULL,
      frase VARCHAR(300) NOT NULL,
      resposta varchar(40),
      FOREIGN KEY (questao) REFERENCES questao(id)
) 
*/

exports.saveQuestaoDigitarLacuna = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );
  result3 = await db.query(
    "insert into preencherdigitando(questao, frase, resposta) values ('" +
      result.rows[0].id +
      "','" +
      questao.frase +
      "','" +
      questao.resposta +
      "');"
  );
  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};

exports.saveQuestaoAssociarColunas = async function (questao) {
  result = await db.query(
    "insert into questao (id) values((select count(*)+1 from questao)) RETURNING id;"
  );



  result3 = await db.query(
    "insert into associar(questao, opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10) values ('" +
      result.rows[0].id +
      "','" +
      questao.opcao1 +
      "','" +
      questao.opcao2 +
      "','" +
      questao.opcao3 +
      "','" +
      questao.opcao4 +
      "','" +
      questao.opcao5 +
       "','" +
      questao.opcao6 +
      "','" +
      questao.opcao7 +
      "','" +
      questao.opcao8 +
      "','" +
      questao.opcao9 +
      "','" +
      questao.opcao10 +
      "');"
  );

  result4 = await db.query(
    "insert into questaocategoria(questao, categoria) values ('" +
      result.rows[0].id +
      "','" +
      questao.categoria +
      "')"
  );

  return result4;
};

exports.getQuestao = async function () {
  result = await db.query("select * from preencherdigitando");
  return result.rows;
};
exports.getQuestaoId = async function (id) {
  result = await db.query("select * from questao where id =" + id);
  return result.rows;
};
exports.getCategoria = async function () {
  result = await db.query("select * from categoria");
  return result.rows;
};
exports.getSenha = async function (email) {
  result = await db.query(
    "select usuariobanco.senha from usuariobanco where usuariobanco.email='" +
      email +
      "'"
  );
  return result.rows;
};
exports.getSenhaApp = async function (email) {
  result = await db.query(
    "select jogador.senha from jogador where jogador.email='" + email + "'"
  );
  return result.rows;
};
exports.getUser = async function (email) {
  result = await db.query(
    "select usuariobanco.nome from usuariobanco where usuariobanco.email = '" +
      email +
      "'"
  );
  return result.rows;
};
exports.checkExistence = async function (email) {
  result = await db.query(
    "select nome from jogador where email='" + email + "'"
  );
  return result.rows;
};
exports.cadastrarUsuario = function (
  email,
  nome,
  genero,
  datadenascimento,
  senha
) {
  //console.log(nome, genero, datadenascimento, senha)
  // return db.none("insert into jogador(email,senha,nome,genero, datadenascimento) values ('"+ email + "', '" + senha +"', '"+ nome +"', "+ genero +", '" + datadenascimento +"' )");
};
exports.Login = function (req, res, next) {
  // console.log(req);
  // console.log(req.email);
  // console.log(md5(req.password))
};
exports.saveQuestao = async function (questao) {
  //if(questao.AC == "on"){
  //console.log(questao.coluna1);
  //return db.none("insert into associar(opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10) values ('"+ questao.coluna1 +"','" + questao.coluna2+ "','" + questao.coluna3 +"','" + questao.coluna4 + "','"+ questao.coluna5 + "','"+ questao.coluna6 + "','" + questao.coluna7 + "','" + questao.coluna8 + "','" + questao.coluna9 + "','" + questao.coluna10 + "')'");
  //}
  //return db.none('insert into preencherdigitando(frase, resposta) values(oi, bom dia)')
  //return db.none('insert into blabla returning')
};
