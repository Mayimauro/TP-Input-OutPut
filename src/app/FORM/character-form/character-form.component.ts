import { Component } from '@angular/core';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import {CharacterService} from '../../servicios/character.service';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent {

  submitted = false;
  formData = {nombre: '',comic: ''};

  constructor(private characterService: CharacterService) {}

  onSubmit(form: NgForm) {
    if(form.valid){
      this.submitted = true;
      this.formData.nombre = form.value.nombre;
      this.formData.comic = form.value.comic;

      this.characterService.addCharacter(this.formData);

      console.log("datos del form:",this.formData);
      form.resetForm();
    }else {
      console.log("invalid form");
    }
  }

  protected readonly onsubmit = onsubmit;

}
