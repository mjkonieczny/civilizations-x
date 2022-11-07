import { Command } from '../model'

export const warningCommandFactory = (text: string): Command => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text,
      level: 'warning'
    }
  ],
})
