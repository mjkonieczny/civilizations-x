import { Command } from '../model'
import { createCommandFactory } from './create'
import { notFoundCommandFactory } from './notFound'

export const commandFactory = (
  command: string,
): Command => {
  const [name, ...args] = command.split(' ')

  switch (name) {
  case 'create':
    return createCommandFactory(...args)
  default:
    return notFoundCommandFactory(name)
  }
}
