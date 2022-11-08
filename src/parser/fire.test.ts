import { describe, it, expect } from 'vitest'
import { execute } from '../model'
import { parse } from './input'

describe('fire command', () => {
  const initialCommands = `
    create board rectangle 5 6
    create knight Lancelot 1 1
  `

  it.each([
    [1, 0, 'N'],
    [2, 1, 'W'],
    [0, 1, 'E'],
    [1, 2, 'S'],
    [0, 0, 'NE'],
    [0, 2, 'SE'],
    [2, 2, 'SW'],
    [2, 0, 'NW'],
  ])('should fire and kill', (x, y, direction) => {
    // given
    const commands = parse(`
      ${initialCommands}
      create dragon Caraxas ${x} ${y}
      fire Caraxas ${direction}
    `)

    // when
    const result = execute(commands)

    console.log(result)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [{
          type: 'dragon',
          name: 'Caraxas',
          position: [x, y],
        }],
        logs: expect.arrayContaining([
          {
            text: `Caraxas fired ${direction}`,
            level: 'info',
          },
        ]),
      })
    )
  })
})