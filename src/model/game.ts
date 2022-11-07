import { Board } from './board'

export type Game = {
  board: Board;
}

export const createEmptyGame = (): Game => ({
  board: {
    n: 0,
    m: 0
  }
})