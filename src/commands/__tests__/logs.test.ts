import { describe, it, expect } from 'vitest'
import { createEmptyGame } from '../../model'
import { info, error, warning, notFound } from '../logs'

const getCommand = (text: string) => {
  switch (text) {
  case 'info':
    return info
  case 'error':
    return error
  case 'warning':
    return warning
  case 'notFound':
    return notFound
  default:
    throw new Error(`Command ${text} not found`)
  }
}

describe('logs', () => {
  it.each([
    ['info', 'foo', 'info', 'foo'],
    ['error', 'bar', 'error', 'bar'],
    ['warning', 'baz', 'warning', 'baz'],
    ['notFound', 'qux', 'error', 'Command qux not found'],
  ])('should %s %s with level %s message %s', (name, message, level, text) => {
    // given
    const command = getCommand(name)(message)
    const game = createEmptyGame()

    // when
    const result = command(game)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        logs: [
          {
            text,
            level,
          },
        ],
      })
    )
  })
})