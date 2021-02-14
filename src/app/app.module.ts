import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import * as $ from 'jquery';
import { PchessBoardComponent } from './pchess-board/pchess-board.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PchessBoardComponent,
    HomeComponent,
    BookComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }