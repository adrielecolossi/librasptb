const questaoData = require('../data/questaoData');
const categoriaData = require('../data/categoriaData');
exports.getQuestao = function(){
    return questaoData.getQuestao();
}

exports.saveQuestao = function(questao){

    return questaoData.saveQuestao(questao)
}

exports.getQuestaoId = function(id){
    return questaoData.getQuestaoId(id)
}

exports.checkExistence = function(email){
    return questaoData.checkExistence(email)
}
exports.getCategoria = function(){
    return questaoData.getCategoria()
}

exports.saveQuestaoDigitarMidia= async  function(questao){
    result = await questaoData.saveQuestaoDigitarMidia(questao);
    return result;
}
exports.Login = function(req, res, next){
    return questaoData.Login(req)
}
exports.getSenha = function(email){
    return questaoData.getSenha(email);
}
exports.getSenhaApp = function(email){

    return questaoData.getSenhaApp(email);
}
exports.getUser = function(email){

  
    return questaoData.getUser(email);
}

exports.cadastrarUsuario = function(email,nome,genero, datadenascimento, senha){
    return questaoData.cadastrarUsuario(email,nome,genero, datadenascimento, senha);
}



exports.saveCategoria = function(categoria){
    return categoriaData.saveCategoria(categoria);
}

