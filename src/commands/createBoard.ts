import { Command } from '../model'

export const createBoardCommandFactory = (n: number, m: number): Command => (game) => ({
  ...game,
  board: {
    n,
    m
  }
})
