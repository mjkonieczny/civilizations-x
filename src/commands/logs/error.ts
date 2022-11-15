import { Game } from '../../model'
import { Command } from '../../patterns'

export const error = (text: string): Command<Game> => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text,
      level: 'error'
    }
  ],
})
