import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { BEAPICommService } from 'src/shared/-beapicomm-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.css']
})

export class ImportacaoComponent
{

  public excelImportado : [][]    = [];

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

  public ProcessaCidades() : boolean
  {


    for(let linha = 0; linha <= this.excelImportado.length; linha++)
    {

      this.APICall.Post_NovaCidade(this.excelImportado[linha].Nome,
                                   this.excelImportado[linha].Populacao,
                                   this.excelImportado[linha].Estado);

    }

    return false;

  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
