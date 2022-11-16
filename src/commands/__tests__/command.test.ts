import { describe, it, expect } from 'vitest'
import { parse } from '../../parser'
import { execute } from '../../model'

describe('command', () => {
  it.each([
    ['hokuspokus'],
    ['abrakadabra'],
  ])('should not find command %s', (name) => {
    // given
    const commands = parse(`
      ${name} board 1 2
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        orientation: expect.objectContaining({
          type: 'none',
        }),
        logs: [
          {
            text: `Command ${name} not found`,
            level: 'error'
          }
        ]
      })
    )
  })
})