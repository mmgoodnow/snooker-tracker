import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import { RankingsComponent } from './rankings/rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
