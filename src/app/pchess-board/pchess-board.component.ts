import { Component, OnInit } from '@angular/core';
import * as ChessJS from 'chess.js'
import * as ChessBoardJS from 'chessboardjs'
const ChessBoard:any = ChessBoardJS
const Chess:any = ChessJS

const pieceTheme = 'https://koblenski.github.io/javascript/chessboardjs-0.3.0/img/chesspieces/wikipedia/{piece}.png'

function  diceroll() {
  return Math.floor(Math.random()*6+1) 
}

@Component({
  selector: 'app-pchess-board',
  templateUrl: './pchess-board.component.html',
  styleUrls: ['./pchess-board.component.css']
})
export class PchessBoardComponent implements OnInit {
  title = 'pchess'
  status = 'Begin'
  fen = diceroll().toString()
  pgn = ''
  board:any
  game = Chess()

  ngOnInit() {
    //console.log(this.game)
    const cfg = {
      draggable: true,
      pieceTheme: pieceTheme,
      position: 'start',
      onDragStart: this.onDragStart.bind(this),
      onDrop: this.onDrop.bind(this),
      onSnapEnd: this.onSnapEnd.bind(this)
    }
    this.board = ChessBoard('board1', cfg)
  }

  onDragStart(source, piece, position, orientation) {
    if (this.game.game_over()) return false

    if ((this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
      return false
    }
  }
  
  onDrop(source, target) {
    var move = this.game.move({
      from: source,
      to: target,
      promotion: 'q'
    })

    if (move === null) return 'snapback'

    this.updateStatus()
  }

  onSnapEnd() {
    this.board.position(this.game.fen())
  }

  updateStatus() {
    var moveColor = 'White'
    if (this.game.turn() === 'b') {
      moveColor = 'Black'
    }

    if (this.game.in_checkmate()) {
      status = 'Game over, ' + moveColor + ' is in checkmate.'
    } else if (this.game.in_draw()) {
      status = 'Stalemate.'
    } else {
      status = moveColor + ' to move'

      if (this.game.in_check()) {
        status += ', ' + moveColor + ' is in check'
      }
    }
    this.status = status
    let hist = this.game.history({verbose: true})
    let flag = hist[hist.length-1].flags
    console.log(this.game.fen().split(' ')[1])
    this.pgn = ""
    this.fen = ""
    if (flag.includes('c')) {
      let d = diceroll()
      this.fen = "\nRolling dice... Rolled a " + d
      if (d >= 4) {
        this.pgn = "Roll succeeded, piece captured!"
      } else {
        this.pgn = "Roll failed, piece does not capture."
        this.game.undo()
        
        let tokens = this.game.fen().split(' ')
        tokens[1] = tokens[1] === 'w' ? 'b' : 'w'
        tokens[3] = '-'
        let fen = tokens.join(' ')
        let suc = this.game.load(tokens.join(' '))
        console.log(suc)
        console.log(fen)
        console.log(this.game.validate_fen(fen))

        this.board.position(this.game.fen())
      }
    }

  }
}
;