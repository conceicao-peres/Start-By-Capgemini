import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametro',
  templateUrl: './pagina-com-parametro.component.html',
  styleUrls: ['./pagina-com-parametro.component.css']
})
export class PaginaComParametroComponent implements OnInit{
  id: number | null = null
  idade: number | null = null
  nome: string = ""

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get("id"))
    });

    this.route.queryParamMap.subscribe(params =>{
      this.idade = Number(params.get("idade")),
      this.nome = String(params.get("nome"))
    })
    
  }

}
