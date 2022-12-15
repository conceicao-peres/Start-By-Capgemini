import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome= "Conceicao"
  git = "https://github.com/conceicao-peres"
  linkedin = "https://www.linkedin.com/in/conceicao-peres-da-silva/"
  urlImg= "/assets/foto.jpeg"

  mostrarContatos() {
    alert('Git:' + this.git)
    alert('Linkedin:' + this.linkedin )
  }

}
