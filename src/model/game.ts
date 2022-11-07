import { Board } from './board'
import { Log } from './log'

export type Game = {
  board: Board;
  logs: Log[]
}

export const createEmptyGame = (): Game => ({
  board: {
    n: 0,
    m: 0
  },
  logs: []
})