import { Cidade } from './cidade.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dolar } from './dolar.modal';

@Injectable({
    providedIn: 'root'
})

export class CidadeService{

    
    constructor(private http: HttpClient) {}


    public getDolar(): Observable<Dolar>{
        return this.http.get<Dolar>("https://economia.awesomeapi.com.br/json/all/USD-BRL",);
    }
    


}