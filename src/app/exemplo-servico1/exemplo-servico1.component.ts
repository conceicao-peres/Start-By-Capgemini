import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico1',
  templateUrl: './exemplo-servico1.component.html',
  styleUrls: ['./exemplo-servico1.component.css']
})
export class ExemploServico1Component {
  nome = "";

  inserirNome(){
    console.log(`Nome ${this.nome} inserido`)
  }
}
