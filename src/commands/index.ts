import { create } from './create'
import { notFound } from './logs/notFound'
import { move } from './move'

export const commandFactory = (
  command: string,
) => {
  const [name, ...args] = command.split(' ')

  switch (name) {
  case 'create':
    return create(...args)
  case 'move':
    return move(args[0], args[1], Number(args[2]))
  default:
    return notFound(name)
  }
}
