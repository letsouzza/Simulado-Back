 create database db_livros;
 use db_livros;
 show tables;
 
 create table tbl_livro(
	id int auto_increment primary key,
    titulo varchar(100) not null,
    data_publicacao date not null,
    quantidade int not null, 
    isbn varchar(45) not null 
 );
 alter table tbl_livro add column status boolean not null;
 desc tbl_livro;
 
 create table tbl_usuario(
	 id int auto_increment primary key,
     login varchar(45) not null,
     senha varchar(45) not null
 );
 
 create table tbl_tipo_movimentacao(
	id int auto_increment primary key,
    tipo varchar(45) not null
 );
 
 create table tbl_movimentacao(
	id int auto_increment primary key,
    id_movimentacao int,
    id_usuario int,
    quantidade int not null,
    data_movimentacao date not null,
    id_livro int,
    
    constraint fk_tipo_movimentacao foreign key (id_movimentacao) references tbl_tipo_movimentacao(id),
    constraint fk_usuario_movimentacao foreign key (id_usuario) references tbl_usuario(id),
    constraint fk_livro_movimentacao foreign key (id_livro) references tbl_livro(id)
 );