import { Command } from '../model'

export const notFoundCommandFactory = (name: string): Command => (game) => ({
  ...game,
  logs: [
    ...game.logs,
    {
      text: `Command [${name}] not found`,
      level: 'error'
    }
  ]
})