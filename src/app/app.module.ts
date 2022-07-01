import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {InMemoryDataService} from "./in-memory-data.service";
import {LoaderComponent} from "./loader/loader.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonsModule} from "./pokemons/pokemons.module";


@NgModule({
  imports: [BrowserModule, HttpClientModule, PokemonsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), AppRoutingModule],

  declarations: [AppComponent, LoaderComponent,
    PageNotFoundComponent
  ],
  providers: [Title],
  exports: [
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
