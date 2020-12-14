import { DAO } from './DAO'
import { Pet } from '../Model/Pet'

export class UsuarioDAO extends DAO {

  constructor() {
    super('pets')
  }

  add(pet: Pet) {
    const {nome, raca, tipo} = pet
    super.add({nome, raca, tipo})
  }



}
