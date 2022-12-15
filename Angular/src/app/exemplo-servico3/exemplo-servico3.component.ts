import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico3',
  templateUrl: './exemplo-servico3.component.html',
  styleUrls: ['./exemplo-servico3.component.css']
})
export class ExemploServico3Component {
  quantidade = ""

  constructor(public loggar: LoggerService){}

  inserirQuantidade(){
    this.loggar.logar(`quantidade inserida: ${this.quantidade}`)
  }
}
