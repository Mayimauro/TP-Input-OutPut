import { Injectable } from '@angular/core';
import { CharactersInterface } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: CharactersInterface[] = [];

  addCharacter(character: { comic: string; nombre: string }) {
    this.characters.push(character);
  }

  getCharacters() {
    return this.characters;
  }
}
