/*********************************************************************************************************************************************************************************
 *Objetivo: Controller referente as ações de CRUD de Usuario, responsável pela integração entre app e model
            Validações, tratamento de dados etc...
 *Data: 30/10/2025
 *Autor: Letícia 
 *Versão: 1.0
***********************************************************************************************************************************************************************************/

//import do arquivo de menssagens e status code 
const message = require ('../modulo/config.js')

//import do DAO para realizar o CRUD no Banco de Dados 
const usuarioDAO = require ('../model/dao/usuario.js')

const inserirUsuario = async function(item, contentType){
    try {
        if(String(contentType).toLowerCase() == 'application/json'){
            if(item.login  == '' || item.login == null || item.login == undefined || item.login.lenght > 45 ||
                item.senha  == '' || item.senha == null || item.senha == undefined || item.senha.lenght > 45
            ){
                return message.ERROR_REQUIRED_FIELDS //400
            }else{
                let resultUsuario = await usuarioDAO.insertUser(item)

                if(resultUsuario)
                    return message.SUCESS_CREATED_ITEM //201
                else
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 -> erro model
            }
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 -> erro controller
    }
}

module.exports = {
    inserirUsuario
}