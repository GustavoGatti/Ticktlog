import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/shared/estado.modal';
import { EstadoService } from 'src/shared/estado.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [EstadoService]
})



export class PainelComponent implements OnInit {

  public opcao:string;
  public estados: Estado[];

  constructor(private http: HttpClient, private estadoService: EstadoService) { }

  ngOnInit(): void {
    console.log(this.estadoService.getEstados());
  }

  getSelectedDropdown(selecionado: string){
    alert(selecionado);
    this.opcao = selecionado;  
    
  }



}
