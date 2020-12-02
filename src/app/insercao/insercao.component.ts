import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output ,EventEmitter       } from '@angular/core';
import { ActivatedRoute, Router           } from '@angular/router';
import { BEAPICommService } from 'src/shared/-beapicomm-service.service';


@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.css']
})


export class InsercaoComponent implements OnInit{

  idEstado: string = '';
  nomeEstado: string = '11';  

  constructor(private router: Router,
    public APICall: BEAPICommService,
    private route: ActivatedRoute
  ) { }
  


  ngOnInit(): void {
    this.idEstado = this.route.snapshot.paramMap.get("idEstado");
    if(this.idEstado == '1') {
      this.nomeEstado = 'Rio Grande do Sul'
    } else if(this.idEstado == '11') {
      this.nomeEstado = 'Santa Catarina'
    } else {
      this.nomeEstado = 'Paraná'
    }
  }

  public importarCidades() : boolean{
    //console.log(this.numeroEstadoSelecionado);
    this.router.navigate(['/importarCidades']);
    return false;
  }
  voltar(): void {
    this.router.navigate(['']);
  }

}
