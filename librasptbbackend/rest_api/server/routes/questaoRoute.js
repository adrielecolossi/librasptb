const express = require("express");
const router = express.Router();

const questaoService = require("../service/questaoService.js");
var md5 = require('md5');
const jwt = require('jsonwebtoken');
const multer= require('multer')
//const multerConfig = require('../config/multer')
const path= require('path');
const multerConfig = require('./config/multer.js')
let erro=false;
////const createAndUploadFile = CAUPF;
const fs= require('fs')
const readline= require('readline');

const {google} = require('googleapis');

const KEYFILEPATH = 'ServiceAccountCred.json';

const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: SCOPES
    }
)

const {createAndUploadFile} = require('./upload');




//createAndUploadFile('','',auth)
//console.log(multerConfig)
//const upload =multerConfig.dest
/*

router.get('/', (req, res)=>{
   return res.json({message:'okay'})
})
*/

router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  console.log(req.file)

  return res.json(post);
});
router.get("/questao", async function (req, res) {
  const questao = await questaoService.getQuestao();
  res.json(questao);
});


router.get("/questao/:id", async function (req, res) {
const questao = await questaoService.getQuestaoId(req.params.id);
  return res.json({
    recebido: req.params.id, 
    dobro: req.params.id*2,
    par: req.params.id%2 ==0 ,
    questao
  })
});



const upload = multer({ dest: 'uploads/' });

// Configuramos o upload como um middleware que
// espera um arquivo cujo a chave é "foto"


router.post('/imagem',  multer(multerConfig).single('file'), async function (req, res) {
 
console.log('entrou')

path.resolve(__dirname, "..", "..", "tmp", "uploads")
console.log(req.file)
//console.log("file name", req);                                           
//console.log("file path", req.files.file.path);  
createAndUploadFile(req.baseUrl,'./rest_api/server/tmp/uploads/' + req.file.filename,auth)
 //const newQuestao = await questaoService.saveQuestao(questao);
return res.json(req.file);
})


/*

router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {

   console.log(req.file)


  return res.json(post);
});
*/
router.post("/questao", async function (req, res) {
  const tokenRecebido = req.body.token
  let questao= req.body;
  console.log(questao);
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if(decodedToken){
    const newQuestao = await questaoService.saveQuestao(questao);
    return res.json({msg: 'Sucesso ao cadastrar uma questão'});  
  } else{
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.'});   
  }
  //const questao = req.data;
  //console.log(req.fields)
  
});


router.put("/questao/:id", async function (req, res) {});

router.delete("/questao/:id", async function (req, res) {});

router.post("/login", async function (req, res, next) {
console.log(req.body.email)

const email = req.body.email
const senha = req.body.senha
console.log(senha)
console.log(email)
const senhaUser = await questaoService.getSenha(email);

console.log('SenhaUser', senhaUser);
const senhaCriptografada=  md5(senha);
if(senhaUser== undefined){
  erro='Este email não esta cadastrado no nosso banco de dados';
}
if(senhaUser[0].senha == senhaCriptografada){
  token = jwt.sign(
    {
      email: email
    },
    'somesupersecretsecret',
    { expiresIn: '1h' }
  );
  return res.status(200).send({ token: token, email:email });    
} else {
  return res.status(400).json({ msg: erro});
}
})



/*
router.post('/categoria', async function(req, res){
  const categoria = req.body;
  console.log('oi')
  const newCategoria = await categoriaService.saveCategoria(categoria)
  res.json(newCategoria);
  });
*/

router.get("/categoria", async function (req, res) {
  const categoria = await questaoService.getCategoria();
  //res.json(categoria);
});

//module.exports = router;

module.exports =router
