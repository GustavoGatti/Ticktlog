import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import {ICidade} from '../app/interfaces/cidade';



@Injectable({
  providedIn: 'root'
})

export class BEAPICommService 
{

  private readonly API_PostURL: string  = "https://ticketlog-tcs.herokuapp.com/api/cidades/estado=";
  private PostURL:              string  = '';
  
  private novaCidade:           ICidade = {nome: '', populacao: 0};

  constructor( private http: HttpClient ) { }

  public IdentificaEstado(cidade:string) : number
  {

    if(cidade == "Rio Grande do Sul")
    {
      return 1;
    }
    else if(cidade == "Santa Catarina")
    {
      return 11;
    }
    else if(cidade == "Paraná")
    {
      return 21;
    }

    return 0;

  }



  public Post_NovaCidade(novaCidade: string, populacao: any, estado: string) : any
  {
    
    let idEstado = this.IdentificaEstado(estado);

    this.PostURL = this.API_PostURL + idEstado.toString() + '/';

    populacao    = Number(populacao);

    this.novaCidade = { nome: novaCidade, populacao: populacao };

    this.http.post(this.PostURL, this.novaCidade).pipe(take(1)).subscribe(success => {alert("Incluso com Sucesso")},
                                                                          error  => {alert("Erro" + error.message)});
  }

}
