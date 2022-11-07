import { it, describe, expect } from 'vitest'
import { execute } from '../model/command'
import { parse } from './input'


describe('create board command', () => {
  it('should not found command', () => {
    // given
    const commands = parse(`
      hokuspokus board 1 2
    `)

    // when
    const result = execute(commands)

    // then
    expect(result.logs).toEqual([
      {
        text: 'Command hokuspokus not found',
        level: 'error'
      }
    ])
  })

  it.each([
    ['create board 1 1', 1, 1, 'Board created with 1 rows and 1 columns', 'info'],
    ['create board 3 4', 3, 4, 'Board created with 3 rows and 4 columns', 'info'],
  ])('should %s', (command, n, m, text, level) => {
    // given
    const commands = parse(`
      ${command}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual({
      board: {
        n,
        m,
      },
      logs: [
        {
          text,
          level
        }
      ]
    })
  })

  it.each([
    ['create board 0 1'],
    ['create board 1 0'],
    ['create board 251 1'],
    ['create board 1 251'],
  ])('should not %s', (command) => {
    // given
    const commands = parse(`
      ${command}
    `)

    // 
    const result = execute(commands)

    // then
    expect(result).toEqual({
      board: {
        n: 0,
        m: 0,
      },
      logs: [
        {
          text: 'Board size must be between 1 and 250',
          level: 'warning'
        }
      ]
    })
  })
})