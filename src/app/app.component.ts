import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharacterListComponent} from './CRUD/character-list/character-list.component';
import {NavBarComponent} from './CRUD/nav-bar/nav-bar.component';
import {CharacterFormComponent} from './FORM/character-form/character-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent, NavBarComponent, CharacterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaPersonajesComic';
}
