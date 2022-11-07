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
    expect(result).toEqual(
      expect.objectContaining({
        orientation: expect.objectContaining({
          type: 'none',
        }),
        logs: [
          {
            text: 'Command hokuspokus not found',
            level: 'error'
          }
        ]
      })
    )
  })

  it.each([
    ['create board rectangle 1 1', 'Rectangle board created with 1 rows and 1 columns'],
    ['create board rectangle 3 4', 'Rectangle board created with 3 rows and 4 columns'],
  ])('should %s', (command, text) => {
    // given
    const commands = parse(`
      ${command}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        orientation: expect.objectContaining({
          type: 'rectangle',
        }),
        logs: [
          {
            text,
            level: 'info'
          }
        ]
      })
    )
  })

  it.each([
    ['create board rectangle 0 1'],
    ['create board rectangle 1 0'],
    ['create board rectangle 251 1'],
    ['create board rectangle 1 251'],
  ])('should not %s', (command) => {
    // given
    const commands = parse(`
      ${command}
    `)

    // 
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        orientation: expect.objectContaining({
          type: 'none',
        }),
        logs: [
          {
            text: 'Board size must be between 1 and 250',
            level: 'warning'
          }
        ]
      })
    )
  })
})