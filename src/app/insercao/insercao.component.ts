import { Component, Input, OnInit, Output        } from '@angular/core';
import { Router           } from '@angular/router';
import { BEAPICommService } from 'src/shared/-beapicomm-service.service';
import { Estado } from 'src/shared/estado.modal';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.css']
})

export class InsercaoComponent{

  public estadoSelecionado        : string = 'Santa Catarina';
  public numeroEstadoSelecionado  : number = 11;


  constructor(private router        : Router,
              public APICall        : BEAPICommService, 
         ) { }
  
  


  public importarCidades() : boolean
  {
    
    console.log(this.numeroEstadoSelecionado);
    this.router.navigate(['/importarCidades']);

    return false;

  }

}
