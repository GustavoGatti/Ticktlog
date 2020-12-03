import { Estado } from './estado.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cidade } from './cidade.modal';


@Injectable({
    providedIn: 'root'
})
export class EstadoService{

    
    constructor(private http: HttpClient) {}

    
    public getEstados(dolar: number): Observable<Estado[]>{
        console.log(dolar);
        var url = "https://ticketlog-2.herokuapp.com/api/estados/dolar=" + dolar;
        console.log(url);
        return this.http.get<Estado[]>(url,);
    }

    public getCidades(id, dolar): Observable<Cidade[]>{
        return this.http.get<Cidade[]>("https://ticketlog-2.herokuapp.com/api/cidades/estado=" + id + "/dolar=" + dolar,);
    }

    public DeletCidade(id){
        return this.http.delete("https://ticketlog-2.herokuapp.com/api/cidades/delete="+id);
    }


}