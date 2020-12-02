import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { CommonModule } from "@angular/common";
import { InsercaoComponent } from './insercao/insercao.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BEAPICommService } from 'src/shared/-beapicomm-service.service';
import { ImportacaoComponent } from './importacao/importacao.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    InsercaoComponent,
    ImportacaoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [BEAPICommService,
    {
      provide: LOCALE_ID,
      useValue: "pt-br"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
