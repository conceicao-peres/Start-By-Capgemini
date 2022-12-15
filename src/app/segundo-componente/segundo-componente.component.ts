import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome= "Conceicao"
  nascimento= "1977-01-25"
  urlImg= "/assets/foto.jpeg"

  mostrarDataNascimento() {
    alert('A data de nascimento e:' + this.nascimento )
  }

}
