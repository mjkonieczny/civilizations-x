import { Game } from '../../model'
import { Command } from '../../patterns'

export const warning = (text: string): Command<Game> => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text,
      level: 'warning'
    }
  ],
})
