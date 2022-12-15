import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  produto = ""

  constructor(private logger: LoggerService){}

  inserirProduto(){
    this.logger.logar(`Produto ${this.produto} inserido`)
  }
}
