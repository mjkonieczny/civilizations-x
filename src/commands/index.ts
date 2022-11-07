import { Command } from '../model'
import { createCommandFactory } from './create'

export const commandFactory = (
  command: string,
): Command => {
  const [type, ...args] = command.split(' ')

  switch (type) {
  case 'create':
    return createCommandFactory(...args)
  default:
    throw new Error(`Unknown command ${type}`)
  }
}
