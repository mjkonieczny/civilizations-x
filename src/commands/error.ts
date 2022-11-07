import { Command } from '../model'

export const errorCommandFactory = (text: string): Command => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text,
      level: 'error'
    }
  ],
})
