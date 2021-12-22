const { query } = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const database = require('../infra/database')
const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
var md5 = require('md5');



exports.getQuestao = function(){
    return  database.query("select * from preencherdigitando")
}
exports.getQuestaoId= function(id){
  return database.query("select * from questao where id ="+ id)
}


exports.Login= function(req, res, next){
console.log(req);
console.log(req.email);
console.log(md5(req.password))

}


exports.saveQuestao = function(questao){

//if(questao.AC == "on"){
  //console.log(questao.coluna1);
  //return database.none("insert into associar(opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10) values ('"+ questao.coluna1 +"','" + questao.coluna2+ "','" + questao.coluna3 +"','" + questao.coluna4 + "','"+ questao.coluna5 + "','"+ questao.coluna6 + "','" + questao.coluna7 + "','" + questao.coluna8 + "','" + questao.coluna9 + "','" + questao.coluna10 + "')'");
//}

//return database.none('insert into preencherdigitando(frase, resposta) values(oi, bom dia)')  
//return database.none('insert into blabla returning')
}

exports.getCategoria = function(){
 
  return  database.query("select * from categoria")
}


exports.getSenha = function(email){

  // return  database.query("select usuario.senha from usuario where usuario.email = 'adriele.colossi4@gmail.com'");
   //select usuario.senha from usuario where usuario.email = 'adriele.colossi4@gmail.com'
  return  database.query("select usuariobanco.senha from usuariobanco where usuariobanco.email='" + email + "'")
 }
 
 exports.getUser = function(email){
   return  database.query("select usuariobanco.nome from usuariobanco where usuariobanco.email = '" + email + "'")
 }
 