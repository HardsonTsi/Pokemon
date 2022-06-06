import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {LoaderComponent} from "./loader/loader.component";
import {PokemonsModule} from "./pokemons/pokemons.module";


@NgModule({
  imports: [BrowserModule, HttpClientModule, PokemonsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}), AppRoutingModule],

  declarations: [AppComponent, LoaderComponent,
    PageNotFoundComponent
  ],
  providers: [Title],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
