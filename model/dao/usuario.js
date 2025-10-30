/*********************************************************************************************************************************************************************************
 *Objetivo: Criar o CRUD de dados da tabela de usuario no Banco de Dados 
 *Data: 0/10/2025
 *Autor: Letícia 
 *Versão: 1.0
***********************************************************************************************************************************************************************************/

// Import da biblioteca do prisma client para realizar as ações no BD 
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do Prisma Client (cria um objeto)
const prisma = new PrismaClient()

const insertUser = async function(user) {
    try {
        let sql = `insert into tbl_usuario (login,
                                          senha)
                                values ('${user.login}',
                                        '${user.senha}')`

        // Executa o scipt SQL no BD e aguarda o resultado (true ou false)
        let result = await prisma.$executeRawUnsafe(sql)

        if(result)
            return true
        else 
            return false // BUG no BD

    } catch (error) {
        return false // BUG de Programação         
    }
}

module.exports = {
    insertUser
}