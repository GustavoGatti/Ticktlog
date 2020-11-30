import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsercaoComponent } from './insercao/insercao.component';


const routes: Routes = [
                        { path: 'inserirCidade',  component: InsercaoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
