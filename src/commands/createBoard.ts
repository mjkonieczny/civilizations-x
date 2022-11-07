import { Command } from '../model'

export const createBoardCommandFactory = (n: number, m: number): Command => (game) => ({
  ...game,
  board: {
    n,
    m
  },
  logs: [
    ...game.logs,
    {
      text: `Board created with ${n} rows and ${m} columns`,
      level: 'info'
    }
  ]
})
