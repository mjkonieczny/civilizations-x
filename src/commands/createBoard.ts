import { Command } from '../model'

export const createBoardCommandFactory = (n: number, m: number): Command => (game) => {
  if (n < 1 || n > 250 || m < 1 || m > 250) {
    return {
      ...game,
      logs: [
        ...game.logs,
        {
          text: 'Board size must be between 1 and 250',
          level: 'error'
        }
      ]
    }
  }

  return {
    ...game,
    board: {
      n,
      m,
    },
    logs: [
      ...game.logs,
      {
        text: `Board created with ${n} rows and ${m} columns`,
        level: 'info'
      }
    ]
  }
}