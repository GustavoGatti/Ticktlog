import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as XLSX from 'xlsx';
import { BEAPICommService } from 'src/shared/-beapicomm-service.service';
import { Router } from '@angular/router';
import { ICidade } from '../interfaces/cidade';

@Component({
  selector: 'app-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css']
})

export class ImportacaoComponent{

  public excelImportado : [][]    = [];
  private loteCidades     : ICidade[] = [];
  pag: number = 1;
  contador: number = 5;
  cont:number = 0;

  constructor( public APICall        : BEAPICommService,
    private router: Router, ) { }




  onChangeListener(trigEvent: any) : boolean
  {
    const target : DataTransfer = <DataTransfer>(trigEvent.target);

    if(target.files.length !==1) throw new Error("Apenas um arquivo por vez é suportado! ");

    const reader : FileReader = new FileReader();

    reader.onload = (e : any) => 
    {

      const bstr : string = e.target.result;

      const workbook : XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      const worksheet_name : string = workbook.SheetNames[0];

      const worksheet : XLSX.WorkSheet = workbook.Sheets[worksheet_name];

      this.excelImportado = (XLSX.utils.sheet_to_json(worksheet, {raw:true}))

      console.log(this.excelImportado)

    }

    reader.readAsBinaryString(target.files[0]);
    return false;
  }

  public ProcessaCidades() : boolean{

    console.log(this.excelImportado)
    if(this.excelImportado.length == 0)
    {
      alert("Selecione um Arquivo .xlsx!");

      return false;
    }
    else
    {

      for(let linha = 0; linha < this.excelImportado.length; linha++)
      {
        console.log(this.excelImportado[0])
        let cidade: ICidade = { nome:       this.excelImportado[linha].Nome,
                                populacao:  this.excelImportado[linha].Populacao,
                                estado:     this.excelImportado[linha].Estado };

        this.loteCidades.push(cidade);

      }

      
      this.APICall.Post_LotesCidades(this.loteCidades);
    }



    return false;

  }

  voltar(): void {
    this.APICall.cidadesExistentes = [];
    this.APICall.errorCount = undefined;
    this.router.navigate(['']);
  }
}
