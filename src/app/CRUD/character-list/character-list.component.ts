import { Component } from '@angular/core';
import {CharacterService} from '../../servicios/character.service';
import {NgForOf} from '@angular/common';
import {CharactersInterface} from '../../interfaces/characters.interface';

interface Character {
  nombre: string;
  comic: string;
}
@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  characters: CharactersInterface[] = [];

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters(); // Obtener la lista de personajes
  }

  borrarPersonaje(character: Character)
  {
    this.characters = this.characters.filter(c => c!== character);
  }

}
