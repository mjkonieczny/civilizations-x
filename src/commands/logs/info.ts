import { Command } from '../../model'

export const infoCommandFactory = (text: string): Command => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text,
      level: 'info'
    }
  ],
})
