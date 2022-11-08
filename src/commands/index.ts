import { Command } from '../model'
import { fireCommandFactory } from './attack'
import { createCommandFactory } from './create'
import { notFoundCommandFactory } from './logs/notFound'
import { moveCommandFactory } from './move'

export const commandFactory = (
  command: string,
): Command => {
  const [name, ...args] = command.split(' ')

  switch (name) {
  case 'create':
    return createCommandFactory(...args)
  case 'move':
    return moveCommandFactory(args[0], args[1], Number(args[2]))
  case 'fire':
    return fireCommandFactory(args[0], args[1])
  default:
    return notFoundCommandFactory(name)
  }
}
