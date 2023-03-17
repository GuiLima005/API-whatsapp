/****************************************************************************
 * Objetivo: Criar uma API para manipulação de dados do WhatsApp
 * Data: 17/03/2023
 * Autor: Guilherme Lima
 * Versão: 1.0
 ****************************************************************************/

// Responsavel pelas requisições
 const express = require('express')

// Responsavel pelas permissões das requisições
const cors = require('cors')

// Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser')

// Import do arquivo de funções para listar os estados e as cidades
const funcoes = require('./modulo/funcoes.js')

// Cria um objeto com as informações da classe express 
const app = express()