import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { eventNames } from 'process';
import { stringify } from 'querystring';
import { CidadeService } from 'src/shared/cidade.service';
import { Estado } from 'src/shared/estado.modal';
import { Dolar } from 'src/shared/dolar.modal';
import { EstadoService } from 'src/shared/estado.service';
import { Cidade } from 'src/shared/cidade.modal';
import { USD } from 'src/shared/USD.modal';
import { error } from 'protractor';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [EstadoService, CidadeService]
})



export class PainelComponent implements OnInit {

  public opcao:number;
  public estados: Array<Estado>;
  public dolar: Dolar;
  public cidades: Array<Cidade>;
  valordolar: any;
  resposta: any;
  public indice: number;
  flag: boolean = false;

  img: string[] = [
    'assets/RioGrandeDoSul.png',
    'assets/SantaCatarina.png',
    'assets/Parana.png'
  ];

  constructor(private http: HttpClient, private estadoService: EstadoService, private cidadeService: CidadeService) { }

  ngOnInit(): void {
  
    this.PegarDolar();
    //this.ListarEstados();
  }

  getSelectedDropdown(event){
    this.flag = true;
    var escolha = (<HTMLInputElement>event.target).innerHTML;
    console.log(escolha); 
    if(escolha == 'Rio Grande do Sul'){ 
      this.opcao = 1;
      this.indice = 0;
      console.log(this.opcao);
    }else if(escolha == 'Santa Catarina'){
      this.opcao = 2;
      this.indice = 1;
      console.log(this.opcao);
    }else{
      this.opcao = 3;
      this.indice = 2;
      console.log(this.opcao); 
    }

    this.http.get<Dolar>("https://economia.awesomeapi.com.br/json/all/USD-BRL",).subscribe(
      _dolar =>{
        this.dolar = _dolar;
        this.ListarCidades(this.opcao, this.dolar.USD.bid);
      },
      error =>{
        console.log("erro");
      }
    );

  }

  PegarDolar(){
      this.http.get<Dolar>("https://economia.awesomeapi.com.br/json/all/USD-BRL",).subscribe(
      _dolar =>{
        this.dolar = _dolar;
        this.ListarEstados(this.dolar.USD.bid);
      },
      error =>{
        console.log("erro");
      }
    );
  }
  
  ListarEstados(dolar){
    this.estadoService.getEstados(dolar).subscribe(
      _estados => {
        this.estados = _estados;
        console.log(this.estados);
      },
      error =>{
        console.log('erro');
      });
  }

  ListarCidades(id, dolar){
    this.estadoService.getCidades(id, dolar).subscribe(
      _cidades =>{
        this.cidades = _cidades;
        console.log(this.cidades);
      }, 
      error => {
        console.log("erro");
      }
    );
  }

  DeletarCidade(id){
    this.estadoService.DeletCidade(id).subscribe(
      _cidade => {
        this.http.get<Dolar>("https://economia.awesomeapi.com.br/json/all/USD-BRL",).subscribe(
          _dolar =>{
            this.dolar = _dolar;
            this.ListarCidades(this.opcao, this.dolar.USD.bid);
          },
          error =>{
            console.log("erro");
          }
        );
      },
      error => {
        console.log("erro");
      });
  }

  

}
