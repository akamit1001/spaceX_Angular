
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FiltersPipe } from './filters.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FiltersPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatNativeDateModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
