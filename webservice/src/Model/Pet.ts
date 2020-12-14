import { UsuarioDAO } from '../Persistence/UsuarioDAO'
import { Model } from './Model'

const dao = new UsuarioDAO()

export class Pet extends Model {

  id?: number
  nome: string
  raca: string
  tipo: string
  constructor(nome: string, raca: string,tipo:string, id?: number) {
    super()
    this.id = id
    this.nome = nome
    this.raca = raca
    this.tipo = tipo
  }

  _validate(erros: string[]): void {
    if (this.nome.length < 2) {
      erros.push(`Nome deve ter pelo menos 2 caracteres`)
    }
  }

  // Active Record
  save(): boolean {
    if (this.isValid) {
      dao.add(this)
      return true
    } else {
      return false
    }
  }

  // Active Record
  static all(): Pets[] {
    return dao.findAll()
  }
}
