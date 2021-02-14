import { Component } from '@angular/core'
import { RouteConfigLoadEnd } from '@angular/router'

const pieceTheme = 'https://koblenski.github.io/javascript/chessboardjs-0.3.0/img/chesspieces/wikipedia/{piece}.png'

function  diceroll() {
  return Math.floor(Math.random()*6+1) 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedPage = 1

  onSelectHome() {
    this.selectedPage = 1
  }

  onSelectPChess() {
    this.selectedPage = 2
  }

  onSelectBook() {
    this.selectedPage = 3
  }
}
;