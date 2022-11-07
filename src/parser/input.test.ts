import { it, describe, expect } from 'vitest'
import { execute } from '../model/command'
import { parse } from './input'


describe('input should be parsed', () => {
  it('should create board', () => {
    // given
    const commands = parse(`
      create board 1 2
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual({
      board: {
        n: 1,
        m: 2
      },
      logs: [
        {
          text: 'Board created with 1 rows and 2 columns',
          level: 'info'
        }
      ]
    })
  })
})