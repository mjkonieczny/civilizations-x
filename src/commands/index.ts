import { fire } from './attack'
import { create } from './create'
import { notFound } from './logs/notFound'
import { move } from './move'

export const createCommand = (
  command: string,
) => {
  const [name, ...args] = command.split(' ')

  switch (name) {
  default:
    return notFound(name)
  }
}
