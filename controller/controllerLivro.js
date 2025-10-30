/*********************************************************************************************************************************************************************************
 *Objetivo: Controller referente as ações de CRUD de Livro, responsável pela integração entre app e model
            Validações, tratamento de dados etc...
 *Data: 30/10/2025
 *Autor: Letícia
 *Versão: 1.0
***********************************************************************************************************************************************************************************/

//import do arquivo de menssagens e status code 
const message = require ('../../modulo/config.js')

//import do DAO para realizar o CRUD no Banco de Dados 
const livroDAO = require ('../model/dao/livros.js')

const inserirLivro = async function(livro, contentType) {
    try {
        if(String(contentType).toLowerCase() == 'application/json')
        {
            if( livro.titulo           == ''  || livro.titulo           == null || livro.titulo           == undefined || livro.titulo.length        > 100 ||
                livro.data_publicacao  == ''  || livro.data_publicacao  == null || livro.data_publicacao  == undefined || livro.data_publicacao.length  > 10 ||
                livro.quantidade       == ''  || livro.quantidade       == null || livro.quantidade       == undefined || isNaN(quantidade) ||
                livro.isbn             == ''  || livro.isbn             == null || livro.isbn             == undefined || livro.isbn.length > 45 ||
                livro.status           == ''  || livro.status           == null || livro.status           == undefined || livro.satus > 1
            )
            {
                return message.ERROR_REQUIRED_FIELDS // 400
            }else{
                let resultLivro = await livroDAO.insertLivro(livro)

                if(resultLivro)
                    return message.SUCESS_CREATED_ITEM // 201
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL // 500 -> erro model
            }
        }else{
            return message.ERROR_CONTENT_TYPE // 415
        }
    } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 -> erro controller
        }
}

const atualizarLivro = async function(numero, livro, contentType) {
    try {
       let id = numero

       if(String(contentType).toLowerCase() == 'application/json')
           {
            if( livro.titulo           == ''  || livro.titulo           == null || livro.titulo           == undefined || livro.titulo.length        > 100 ||
                livro.data_publicacao  == ''  || livro.data_publicacao  == null || livro.data_publicacao  == undefined || livro.data_publicacao.length  > 10 ||
                livro.quantidade       == ''  || livro.quantidade       == null || livro.quantidade       == undefined || isNaN(quantidade) ||
                livro.isbn             == ''  || livro.isbn             == null || livro.isbn             == undefined || livro.isbn.length > 45 ||
                livro.status           == ''  || livro.status           == null || livro.status           == undefined || livro.satus > 1 ||
                id                     == ''  || id                     == null || id                     == undefined || isNaN(id)
            )
            {
                return message.ERROR_REQUIRED_FIELDS // 400
            }else{
                let result = await livroDAO.selectByIdLivro(id)

                if(result != false || typeof(result) == 'object'){

                    if(result.length > 0){

                        livro.id = id
                        let resultLivro = await livroDAO.updateLivro(livro)

                        if(resultLivro){
                            return message.SUCESS_UPDATE_ITEM // 200
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL // 500- model
                        }

                    }else{
                        return message.ERROR_NOT_FOUND // 404
                    }
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE // 415
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500- controller
    }
}

const excluirLivro = async function(numero) {
    try {
        let id = numero

        if ( id == ''|| id == null || id == undefined || isNaN(id)){
            return message.ERROR_REQUIRED_FIELDS // status code 400
        }else{
            
            // Antes de excluir, estamos verificando se existe esse id 
            let resultLivro = await livroDAO.selectByIdLivro(id)

            if(resultLivro != false || typeof(resultLivro) == 'object'){

                if(resultLivro.length > 0){
                    let result = await livroDAO.deleteLivro(id)
                    
                    if(result)
                        return message.SUCESS_DELETE_ITEM // 200
                    else
                        return message.ERROR_INTERNAL_SERVER_MODEL // 500- model

                }else{
                    return message.ERROR_NOT_FOUND // 404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL // 500- model
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

const listarLivros = async function() {
    try {
        let dadosLivro = {}

        let resultLivro = await livroDAO.selectAllLivro()

        if(resultLivro != false || typeof(resultLivro) == 'object'){
            if(resultLivro.length > 0){
                dadosLivro.status = true
                dadosLivro.status_code = 200,
                dadosLivro.items = resultLivro.length
                dadosLivro.livros = resultLivro

                return dadosLivro
            }else{
                return message.ERROR_NOT_FOUND // 404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL // 500
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}
 
const buscarLivro = async function(numero) {
    try {
        let id = numero

        let dadosLivro = {}

        if ( id == ''|| id == null || id == undefined || isNaN(id)){
            return message.ERROR_REQUIRED_FIELDS // status code 400
        }else{
            let resultLivro = await livroDAO.selectByIdLivro(id)

            if(resultLivro != false || typeof(resultLivro) == 'object'){
                if(resultLivro.length > 0){
                    dadosLivro.status = true
                    dadosLivro.status_code = 200,
                    dadosLivro.livros = resultLivro

                    return dadosLivro
                }else{
                    return message.ERROR_NOT_FOUND // 404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL // 500
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

module.exports = {
    inserirLivro,
    atualizarLivro,
    excluirLivro,
    listarLivros,
    buscarLivro
}