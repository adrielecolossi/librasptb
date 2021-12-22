const questaoData = require('../data/questaoData');

exports.getQuestao = function(){
    return questaoData.getQuestao();
}

exports.saveQuestao = function(questao){

    return questaoData.saveQuestao(questao)
}

exports.getQuestaoId = function(id){
    return questaoData.getQuestaoId(id)
}

exports.getCategoria = function(){
    return questaoData.getCategoria()
}

exports.Login = function(req, res, next){
    return questaoData.Login(req)
}
exports.getSenha = function(email){

    return questaoData.getSenha(email);
}

exports.getUser = function(email){

    return questaoData.getUser(email);
}
/*
const categoriaData = require('../data/categoriaData');

exports.saveCategoria = function(){
    return categoriaData.saveCategoria(categoria)
}

*/