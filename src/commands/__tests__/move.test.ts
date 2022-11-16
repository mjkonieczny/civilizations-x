import { describe, it, expect } from 'vitest'
import { execute } from '../../model'
import { parse } from '../../parser'

describe('move command in rectangular board', () => {
  const initialCommands = `
    create board rectangle 5 6
    create dragon Caraxas 2 3
    create knight Lancelot 1 2
  `

  it.each([
    ['Caraxas', 'N', 1, 2, 4],
    ['Caraxas', 'S', 1, 2, 2],
    ['Caraxas', 'E', 1, 3, 3],
    ['Caraxas', 'W', 1, 1, 3],
    ['Caraxas', 'NE', 1, 3, 4],
    ['Caraxas', 'NW', 1, 1, 4],
    ['Caraxas', 'SE', 1, 3, 2],
    ['Caraxas', 'SW', 1, 1, 2],
    ['Caraxas', 'N', 2, 2, 5],
    ['Caraxas', 'S', 2, 2, 1],
    ['Caraxas', 'E', 2, 4, 3],
    ['Caraxas', 'W', 2, 0, 3],
    ['Lancelot', 'N', 1, 2, 3],
    ['Lancelot', 'S', 1, 2, 3],
    ['Lancelot', 'E', 1, 2, 3],
    ['Lancelot', 'W', 1, 2, 3],
  ])('should move %s in %s %s (%s, %s)', (name, direction, step, x, y) => {
    // given
    const commands = parse(`
      ${initialCommands}
      move ${name} ${direction} ${step}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type: 'dragon',
            name: 'Caraxas',
            position: [x, y],
          },
        ]),
        logs: expect.arrayContaining([
          {
            text: `${name} moved ${direction} ${step}`,
            level: 'info',
          },
        ]),
      })
    )
  })
})

describe('move command in cubic board', () => {
  const initialCommands = `
    create board cube 4 5 6
    create dragon Caraxas 2 3 4
    create knight Lancelot 1 1 1
  `

  it.each([
    ['Caraxas', 'N', 1, 2, 4, 4],
    ['Caraxas', 'S', 1, 2, 2, 4],
    ['Caraxas', 'E', 1, 3, 3, 4],
    ['Caraxas', 'W', 1, 1, 3, 4],
    ['Caraxas', 'U', 1, 2, 3, 5],
    ['Caraxas', 'D', 1, 2, 3, 3],
    ['Caraxas', 'NE', 1, 3, 4, 4],
    ['Caraxas', 'NW', 1, 1, 4, 4],
    ['Caraxas', 'SE', 1, 3, 2, 4],
    ['Caraxas', 'SW', 1, 1, 2, 4],
    ['Caraxas', 'NU', 1, 2, 4, 5],
    ['Caraxas', 'ND', 1, 2, 4, 3],
    ['Caraxas', 'EU', 1, 3, 3, 5],
    ['Caraxas', 'ED', 1, 3, 3, 3],
    ['Caraxas', 'SU', 1, 2, 2, 5],
    ['Caraxas', 'SD', 1, 2, 2, 3],
    ['Caraxas', 'NEU', 1, 3, 4, 5],
    ['Caraxas', 'NED', 1, 3, 4, 3],
    ['Caraxas', 'NWU', 1, 1, 4, 5],
    ['Caraxas', 'NWD', 1, 1, 4, 3],
    ['Caraxas', 'SEU', 1, 3, 2, 5],
    ['Caraxas', 'SED', 1, 3, 2, 3],
    ['Caraxas', 'SWU', 1, 1, 2, 5],
    ['Caraxas', 'SWD', 1, 1, 2, 3],
    ['Caraxas', 'N', 2, 2, 5, 4],
    ['Caraxas', 'S', 2, 2, 1, 4],
    ['Caraxas', 'E', 2, 4, 3, 4],
    ['Caraxas', 'W', 2, 0, 3, 4],
    ['Caraxas', 'U', 2, 2, 3, 6],
    ['Caraxas', 'D', 2, 2, 3, 2],
    ['Lancelot', 'N', 1, 2, 3, 4],
    ['Lancelot', 'S', 1, 2, 3, 4],
    ['Lancelot', 'E', 1, 2, 3, 4],
    ['Lancelot', 'W', 1, 2, 3, 4],
    ['Lancelot', 'U', 1, 2, 3, 4],
    ['Lancelot', 'D', 1, 2, 3, 4],
  ])('should move %s in %s %d (%s, %s, %s)', (name, direction, step, x, y, z) => {
    // given
    const commands = parse(`
      ${initialCommands}
      move ${name} ${direction} ${step}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type: 'dragon',
            name: 'Caraxas',
            position: [x, y, z],
          },
        ]),
        logs: expect.arrayContaining([
          {
            text: `${name} moved ${direction} ${step}`,
            level: 'info',
          },
        ]),
      })
    )
  })
})

describe('move command in hexagonal board', () => {
  const initialCommands = `
    create board hexagon 4 5
    create dragon Caraxas 2 3
    create knight Lancelot 1 1
  `

  it.each([
    ['Caraxas', 'E', 1, 3, 3],
    ['Caraxas', 'W', 1, 1, 3],
    ['Caraxas', 'NE', 1, 3, 4],
    ['Caraxas', 'NW', 1, 1, 4],
    ['Caraxas', 'SE', 1, 3, 2],
    ['Caraxas', 'SW', 1, 1, 2],
    ['Caraxas', 'E', 2, 4, 3],
    ['Caraxas', 'W', 2, 0, 3],
    ['Lancelot', 'E', 1, 2, 3],
    ['Lancelot', 'W', 1, 2, 3],
  ])('should move %s in %s %s, (%s, %s)', (name, direction, step, x, y) => {
    // given
    const commands = parse(`
      ${initialCommands}
      move ${name} ${direction} ${step}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type: 'dragon',
            name: 'Caraxas',
            position: [x, y],
          },
        ]),
        logs: expect.arrayContaining([
          {
            text: `${name} moved ${direction} ${step}`,
            level: 'info',
          },
        ]),
      })
    )
  })

  it.each([
    [2, 2, 'N', 1],
    [2, 2, 'S', 1],
    [2, 2, 'E', 1],
    [2, 2, 'W', 1],
    [2, 2, 'NE', 1],
    [2, 2, 'NW', 1],
    [2, 2, 'SE', 1],
    [2, 2, 'SW', 1],
    [2, 4, 'N', 1],
    [1, 2, 'S', 1],
  ])('should not move when wizard nearby (%s, %s) %s %s', (x, y, direction, step) => {
    // given
    const commands = parse(`
      ${initialCommands}
      create wizard Gandalf ${x} ${y}
      move Caraxas ${direction} ${step}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: expect.arrayContaining([
          {
            type: 'dragon',
            name: 'Caraxas',
            position: [2, 3],
          },
          {
            type: 'wizard',
            name: 'Gandalf',
            position: [x, y],
          }
        ]),
        logs: expect.arrayContaining([
          {
            level: 'warning',
            text: 'Caraxas cannot move because there is a wizard nearby',
          },
        ]),
      })
    )
  })
})