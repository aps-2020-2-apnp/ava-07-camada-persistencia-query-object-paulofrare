import { IncomingMessage, ServerResponse } from 'http';
import { Pet } from '../Model/Pet';
import { Command } from './Command'


// GET /pets
class TodosPetsCommand implements Command {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    const registros = Pet.all()
    resp.writeHead(200, { 'Content-Type': 'application/json' })
    resp.end(JSON.stringify(registros))
  }
}

export const todosPetsCommand = new TodosPetsCommand()

export const novoPetCommand = {
  execute(req: IncomingMessage, resp: ServerResponse): void {
    let corpo = ''
    req.on('data', (parte) => corpo += parte)
    req.on('end', () => {
      const {nome, raca, tipo} = JSON.parse(corpo)
      const pet = new Pet(nome, raca, tipo)
      if (pet.save()) {
        resp.writeHead(201, { 'Content-Type': 'text/plain' })
        resp.end('Pet Criado')
      } else {
        resp.writeHead(400, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify({ erros: pet.erros }))
      }
    })
  }
}
