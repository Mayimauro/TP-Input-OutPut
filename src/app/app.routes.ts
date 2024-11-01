import { Routes } from '@angular/router';
import {CharacterListComponent} from './CRUD/character-list/character-list.component';
import {CharacterDetailComponent} from './CRUD/character-detail/character-detail.component';
import {CharacterFormComponent} from './FORM/character-form/character-form.component';

export const routes: Routes = [
  {path:'characters',component:CharacterListComponent},
  {path:'characters/:id',component:CharacterDetailComponent},
  {path:'add-character',component:CharacterFormComponent},
];
