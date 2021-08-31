import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { barradenavegaçao } from './componetes/barradenavegaçao/barradenavegaçao';
import { rodape } from './componetes/rodape/rodape';
import { FullbannerComponent } from './componetes/fullbanner/fullbanner.component';
import { TitulosComponent } from './componetes/titulos/titulos.component';
import { TituloComponent } from './componetes/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    barradenavegaçao,
    rodape,
    FullbannerComponent,
    TitulosComponent,
    TituloComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
