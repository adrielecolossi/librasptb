const express = require("express");
const router = express.Router();
const questaoService = require("../service/questaoService.js");
var md5 = require('md5');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const multerConfig = require('./config/multer.js')
let erro = false;
const fs = require('fs')
const readline = require('readline');
const { google } = require('googleapis');
const KEYFILEPATH = 'ServiceAccountCred.json';
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
}
)
const { createAndUploadFile } = require('./upload');
router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
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
    dobro: req.params.id * 2,
    par: req.params.id % 2 == 0,
    questao
  })
});


router.post('/questaoOrdenarFrase', async function (req, res) {
  const tokenRecebido = req.body.token
  let questao = req.body;
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' })
  }
  if (decodedToken) {
    const newQuestao = await questaoService.saveQuestaoOrdenarFrase(questao);
    return res.json({ msg: 'Sucesso ao cadastrar uma questão' });
  } else {
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' });
  }
});



router.post('/questaoDigitarLacuna', async function (req, res) {
  const tokenRecebido = req.body.token
  let questao = req.body;
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' })
  }
  if (decodedToken) {
    const newQuestao = await questaoService.saveQuestaoDigitarLacuna(questao);
    return res.json({ msg: 'Sucesso ao cadastrar uma questão' });
  } else {
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' });
  }
})

router.post('/questaoMarcarLacuna', async function (req, res) {
  const tokenRecebido = req.body.token
  let questao = req.body;
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' })
  }
  if (decodedToken) {
    const newQuestao = await questaoService.saveQuestaoMarcarLacuna(questao);
    return res.json({ msg: 'Sucesso ao cadastrar uma questão' });
  } else {
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' });
  }
})

router.post('/questaoDigitarMidia', async function (req, res) {
  const tokenRecebido = req.body.token
  let questao = req.body;
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' })
  }
  if (decodedToken) {
    const newQuestao = await questaoService.saveQuestaoDigitarMidia(questao);
    return res.json({ msg: 'Sucesso ao cadastrar uma questão' });
  } else {
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' });
  }
});
router.post('/cadastrarUsuario', async function (req, res) {
  const email = req.body.email
  const nome = req.body.nome
  const genero = req.body.genero
  const datadenascimento = req.body.data
  const senha = md5(req.body.senha);
  console.log(email, nome, genero, datadenascimento, senha)
  const check = await questaoService.cadastrarUsuario(email, nome, genero, datadenascimento, senha);
  res.json(check)
});
const upload = multer({ dest: 'uploads/' });
// Configuramos o upload como um middleware que espera um arquivo cujo a chave é "foto"
router.post('/checkExistence', async function (req, res) {
  const email = req.body.email
  const check = await questaoService.checkExistence(email);
  res.json(check)
});
router.post('/imagem', multer(multerConfig).single('file'), async function (req, res) {
  path.resolve(__dirname, "..", "..", "tmp", "uploads")
  const resp = await createAndUploadFile(req.baseUrl, './rest_api/server/tmp/uploads/' + req.file.filename, auth)
  return res.send(resp);
})
router.post("/questao", async function (req, res) {
  const tokenRecebido = req.body.token
  let questao = req.body;
  console.log(questao);
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (decodedToken) {
    const newQuestao = await questaoService.saveQuestao(questao);
    return res.json({ msg: 'Sucesso ao cadastrar uma questão' });
  } else {
    return res.json({ msg: 'Falha ao cadastrar uma questão. Faça primeiro o login.' });
  }
});
router.put("/questao/:id", async function (req, res) { });
router.delete("/questao/:id", async function (req, res) { });
router.post("/login", async function (req, res, next) {
  const email = req.body.email
  const senha = req.body.senha
  const senhaUser = await questaoService.getSenha(email);
  const senhaCriptografada = md5(senha);
  if (senhaUser[0] !== undefined) {
    if (senhaUser == undefined) {
      erro = 'Este email não esta cadastrado no nosso banco de dados';
    }
    if (senhaUser[0].senha == senhaCriptografada) {
      token = jwt.sign(
        {
          email: email
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      return res.status(200).send({ token: token, email: email });
    } else {
      return res.status(400).json({ msg: erro });
    }
  } else {
    return res.status(400).json({ msg: erro })
  }
})

router.get("/login", async function(req,res){
  const tokenRecebido= req.query.token;
  console.log(tokenRecebido)
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokenRecebido, 'somesupersecretsecret');
    console.log('isLoggedIn')
    return res.json({ msg: 'loggedIn' })
    
  } catch (err) {
    err.statusCode = 500;
    console.log('isNotLoggedIn')
    console.log(err)
    return res.json({ msg: 'notLoggedIn' })
   
  }
})
router.post("/loginApp", async function (req, res, next) {
  const email = req.body.email
  const senha = req.body.senha
  const senhaUser = await questaoService.getSenhaApp(email);
  const senhaCriptografada = md5(senha);
  if (senhaUser == undefined) {
    erro = 'Este email não esta cadastrado no nosso banco de dados';
  }
  if (senhaUser[0] !== undefined) {
    if (senhaUser[0].senha == senhaCriptografada) {
      token = jwt.sign(
        {
          email: email
        },
        'somesupersecretsecret'
      );
      return res.status(200).send({ token: token, email: email });
    } else {
      return res.status(400).json({ msg: "Senha errada" });
    }
  } else {
    return res.status(405).json({ msg: 'Este email não esta cadastrado no nosso banco de dados' })
  }
})
router.post('/categoria', async function (req, res) {
  const categoria = req.body;
  const newCategoria = await questaoService.saveCategoria(categoria)
  res.json(newCategoria);
});
router.get("/categoria", async function (req, res) {
  const categoria = await questaoService.getCategoria();
  res.send(categoria);
});
module.exports = router

/*

router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {

   console.log(req.file)


  return res.json(post);
});


*/