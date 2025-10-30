/*********************************************************************************************************************************************************************************
 *Objetivo: Criar o CRUD de dados da tabela de livro no Banco de Dados 
 *Data: 30/10/2025
 *Autor: Letícia 
 *Versão: 1.0
***********************************************************************************************************************************************************************************/

// Import da biblioteca do prisma client para realizar as ações no BD 
const {PrismaClient} = require('@prisma/client')

//Instancia da classe do Prisma Client (cria um objeto)
const prisma = new PrismaClient()

const insertLivro = async function(livro) {
    try {
        let sql = `insert into tbl_livro (titulo,
                                          data_publicacao,
                                          quantidade,
                                          isbn,
                                          status)
                                values ('${livro.titulo}',
                                        '${livro.data_publicacao}',
                                        '${livro.quantidade}',
                                        '${livro.isbn}',
                                        '${livro.status}')`

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

const updateLivro = async function(item) {
    try { 
        let sql = `update tbl_livro set titulo = '${item.titulo}'
                                        data_publicacao = '${item.data_publicacao}'
                                        quantidade = '${item.quantidade}'
                                        isbn = '${item.isbn}'
                                        status = '${item.status}'
                                        where id =  ${item.id}`
                                        
        let result = await prisma.$executeRawUnsafe(sql) // Usamos o execute porque não vai retornar dados 
        
        if (result)
            return true
        else
            return false
                                                                    
    } catch (error) {
        return false
    }
}

const deleteLivro = async function(number) {
    try {
        let id = number 

        let sql = `delete from tbl_livro where id=${id}`

        // Encaminha o Script SQL para o BD
        let result = await prisma.$executeRawUnsafe(sql) // O delete não volta dados, por isso utiliza o execute 
        
        if(result)
            return true // Não retorna dados só true 
        else
            return false

    } catch (error) {
        return false
    }
}

const selectAllLivro = async function() {
    try {
        let sql = 'select * from tbl_livro'

        // Encaminha o Script SQL para o BD
        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        return false
    }
}

const selectByIdLivro = async function(number) {
    try {
        let id = number 
        
        let sql = `select * from tbl_livro where id=${id} `

        // Encaminha o Script SQL para o BD
        let result = await prisma.$queryRawUnsafe(sql)
        
        if(result)
            return result 
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    insertLivro,
    updateLivro,
    deleteLivro,
    selectAllLivro,
    selectByIdLivro
}