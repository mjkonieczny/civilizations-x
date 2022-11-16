import { describe, it, expect } from 'vitest'
import { execute } from '../../model'
import { parse } from '../../parser'

describe('fire command', () => {
  const initialCommands = `
    create board rectangle 5 6
    create dragon Caraxas 2 2
  `

  it.each([
    [2, 1, 'S'],
    [3, 2, 'E'],
    [1, 2, 'W'],
    [2, 3, 'N'],
    [1, 1, 'SW'],
    [1, 3, 'NW'],
    [3, 3, 'NE'],
    [3, 1, 'SE'],
  ])('should fire and kill from (%s, %s) in %s', (x, y, direction) => {
    // given
    const commands = parse(`
      ${initialCommands}
      create knight Lancelot ${x} ${y}
      fire Caraxas ${direction}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [{
          type: 'dragon',
          name: 'Caraxas',
          position: [2, 2],
        }],
        logs: expect.arrayContaining([
          {
            text: `Caraxas fired ${direction}`,
            level: 'info',
          },
          {
            text: 'Lancelot killed by Caraxas',
            level: 'info',
          }
        ]),
      })
    )
  })

  it.each([
    ['knight'],
    ['peasant'],
    ['wizard'],
  ])('%s should not fire', (type) => {
    // given
    const commands = parse(`
      ${initialCommands}
      create ${type} Geronimo 1 1
      fire Geronimo N
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type,
            name: 'Geronimo',
            position: [1, 1],
          },
        ]),
        logs: expect.arrayContaining([
          {
            text: 'Geronimo cannot fire because it is not a dragon',
            level: 'warning',
          },
        ]),
      })
    )
  })

  it('should fire and multi kill', () => {
    // given
    const commands = parse(`
      ${initialCommands}
      create knight Lancelot 2 4
      create knight Percival 2 3
      fire Caraxas N
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [{
          type: 'dragon',
          name: 'Caraxas',
          position: [2, 2],
        }],
        logs: expect.arrayContaining([
          {
            text: 'Caraxas fired N',
            level: 'info',
          },
          {
            text: 'Lancelot killed by Caraxas',
            level: 'info',
          },
          {
            text: 'Percival killed by Caraxas',
            level: 'info',
          }
        ]),
      })
    )
  })

  it.each([
    [2, 1, 'S'],
    [3, 2, 'E'],
    [1, 2, 'W'],
    [2, 3, 'N'],
    [1, 1, 'SW'],
    [1, 3, 'NW'],
    [3, 3, 'NE'],
    [3, 1, 'SE'],
  ])('should not fire when wizard nearby', (x, y, direction) => {
    // given
    const commands = parse(`
      ${initialCommands}
      create wizard Gandalf ${x} ${y}
      fire Caraxas ${direction}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type: 'wizard',
            name: 'Gandalf',
            position: [x, y],
          },
          {
            type: 'dragon',
            name: 'Caraxas',
            position: [2, 2],
          },
        ]),
        logs: expect.arrayContaining([
          {
            text: 'Wizard nearby, cannot fire',
            level: 'warning',
          },
        ]),
      })
    )
  })
})