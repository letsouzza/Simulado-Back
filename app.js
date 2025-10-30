// Import das bibliotecas para criar a API
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

// Cria um objeto para o Body do tipo JSON 
const bodyParserJSON = bodyParser.json()

// Cria um objeto do app para criar a API 
const app = express()

// Configurações de permissões do CORS para a API 
app.use((request, response, next)=>{

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

/*********************************************************************************************************************************************************************************
* Dia 30/10/2025 -> Autor: Letícia e Duda
*Endpoints referentes a tabela de usuário de: Inserir
 **********************************************************************************************************************************************************************************/

// Import das Controller do projeto 
const controllerUsuario = require('./controller/controllerUsuario')

app.post('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultLivro = await controllerMusicas.inserirMusica(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultMusica.status_code)
    response.json(resultMusica)

})

// Endpoint para listar todas as musicas
app.get('/v1/controle-musicas/musicas', cors(), async function(request, response){

    let resultMusica = await controllerMusicas.listarMusica()

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para buscar música pelo ID
app.get('/v1/controle-musicas/musica/:id', cors(), async function(request, response){

    let id = request.params.id 

    let resultMusica = await controllerMusicas.buscarMusica(id)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para deletar música pelo ID
app.delete('/v1/controle-musicas/musica/:id', cors(), async function(request, response){
    
    //Sempre que for buscar pelo ID é por params 
    let id= request.params.id

    let resultMusica = await controllerMusicas.excluirMusica(id)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

// Endpoint para atualizar música pelo ID
app.put('/v1/controle-musicas/musica/:id', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe o ID da música
    let idMusica = request.params.id

    // Recebe os dados da requisição 
    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultMusica = await controllerMusicas.atualizarMusica(idMusica, dadosBody, contentType)

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})


/*********************************************************************************************************************************************************************************
* Dia 15/04/2025 -> Autor: Letícia
*Endpoints referentes a tabela de usuário de: Inserir
                                             Atualizar
                                             Deletar
                                             Listar tudo
                                             Buscar pelo ID
 **********************************************************************************************************************************************************************************/

// Import das Controller do projeto 
const controllerUsuarios = require('./controller/usuario/controllerUsuario')

//EndPoint para inserir um usuário 
app.post('/v1/controle-musicas/usuario', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultUsuario = await controllerUsuarios.inserirUsuario(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultUsuario.status_code)
    response.json(resultUsuario)

})

//Endpoint para listar todos os usuários
app.get('/v1/controle-musicas/usuarios', cors(), async function(request, response){
    
    let resultUsuario = await controllerUsuarios.listarUsuario()
    
    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

//Endpoint buscar pelo ID
app.get('/v1/controle-musicas/usuario/:id', cors(), async function(request, response){

    //Pegando o ID via params
    let id = request.params.id

    // Chama a função e manda o id
    let resultUsuario = await controllerUsuarios.buscarUsuario(id)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

// Endpoint para deletar usuário pelo ID
app.delete('/v1/controle-musicas/usuario/:id', cors(), async function(request, response){
    
    //Sempre que for buscar pelo ID é por params 
    let id= request.params.id

    let resultUsuario = await controllerUsuarios.excluirUsuario(id)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})

//Endpoint para atualizar usuário pelo ID
app.put('/v1/controle-musicas/usuario/:id', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe o ID do usuário
    let idUser = request.params.id

    // Recebe os dados da requisição 
    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultUsuario = await controllerUsuarios.atualizarUsuario(idUser, dadosBody, contentType)

    response.status(resultUsuario.status_code)
    response.json(resultUsuario)
})


/*********************************************************************************************************************************************************************************
* Dia 15/04/2025 -> Autor: Letícia
*Endpoints referentes a tabela de gravadora de: Inserir
                                                Atualizar
                                                Deletar
                                                Listar tudo
                                                Buscar pelo ID
 **********************************************************************************************************************************************************************************/

// Import das Controller do projeto 
const controllerGravadora = require('./controller/gravadora/controllerGravadora')

//EndPoint para inserir uma gravadora  
app.post('/v1/controle-musicas/gravadora', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    // Recebe os dados do body da requisição 
    let dadosBody = request.body 

    // Chama a função da controller para inserir os dados e aguarda o retorno da função 
    let resultGravadora = await controllerGravadora.inserirGravadora(dadosBody, contentType)

    // Resposta e status code 
    response.status(resultGravadora.status_code)
    response.json(resultGravadora)
})

// Endpoint para listar todas as gravadoras
app.get('/v1/controle-musicas/gravadoras', cors(), async function(request, response){

    let resultGravadora = await controllerGravadora.listarGravadora()

    response.status(resultGravadora.status_code)
    response.json(resultGravadora)
})

//Endpoint buscar pelo ID
app.get('/v1/controle-musicas/gravadora/:id', cors(), async function(request, response){

    //Pegando o ID via params
    let id = request.params.id

    // Chama a função e manda o id
    let resultGravadora = await controllerGravadora.buscarGravadora(id)

    response.status(resultGravadora.status_code)
    response.json(resultGravadora)
})

// Endpoint para deletar gravadora pelo ID
app.delete('/v1/controle-musicas/gravadora/:id', cors(), async function(request, response){
    
    //Sempre que for buscar pelo ID é por params 
    let id= request.params.id

    let resultGravadora = await controllerGravadora.excluirGravadora(id)

    response.status(resultGravadora.status_code)
    response.json(resultGravadora)
})

//Endpoint para atualizar gravadora pelo ID
app.put('/v1/controle-musicas/gravadora/:id', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    let idGravadora = request.params.id

    // Recebe os dados da requisição 
    let dadosBody = request.body

    // Chama a função e encaminha os argumentos: ID, Body e ContentType
    let resultGravadora = await controllerGravadora.atualizarGravadora(idGravadora, dadosBody, contentType)

    response.status(resultGravadora.status_code)
    response.json(resultGravadora)
})