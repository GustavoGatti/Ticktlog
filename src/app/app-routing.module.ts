import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportacaoComponent } from './importacao/importacao.component';
import { InsercaoComponent } from './insercao/insercao.component';
import { PainelComponent } from './painel/painel.component';


const routes: Routes = [
                        { path: '',  component: PainelComponent},
                        {path: 'inserirCidade',  component: InsercaoComponent},
                        {path: 'importarCidades',  component: ImportacaoComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
