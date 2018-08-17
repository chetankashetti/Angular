import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
