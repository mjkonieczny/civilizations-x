import { describe, it, expect } from 'vitest'
import { execute } from '../../model'
import { parse } from '../../parser'

const createBoardCommand = 'create board rectangle 5 6'

describe('create unit command', () => {
  it.each([
    ['dragon', 'Caraxas'],
    ['knight', 'Lancelot'],
    ['peasant', 'Janusz'],
    ['wizard', 'Merlin'],
  ])('should create %s %s', (type, name) => {
    // given
    const commands = parse(`
      ${createBoardCommand}
      create ${type} ${name} 1 1
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [
          {
            type,
            name,
            position: [1, 1],
          },
        ],
        logs: expect.arrayContaining([
          {
            text: `${type} ${name} created at position [1,1]`,
            level: 'info',
          },
        ]),
      })
    )
  })

  it.each([
    ['dragon', -1, 1],
    ['knight', 1, -1],
    ['peasant', -1, 1],
    ['wizard', 1, -1],
  ])('should not create %s at position %d', (type, x, y) => {
    // given
    const commands = parse(`
      ${createBoardCommand}
      create ${type} Foo ${x} ${y}
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [],
        logs: expect.arrayContaining([
          {
            text: `${type} Foo cannot be created at position [${x},${y}]`,
            level: 'warning',
          },
        ]),
      })
    )
  })

  it.each([
    ['dragon', 'Caraxas'],
    ['knight', 'Lancelot'],
    ['peasant', 'Janusz'],
    ['wizard', 'Merlin'],
  ])('should not create %s %s because the name is already taken', (type, name) => {
    // given
    const commands = parse(`
      ${createBoardCommand}
      create ${type} ${name} 1 1
      create ${type} ${name} 2 2
    `)

    // when
    const result = execute(commands)

    // then
    expect(result).toEqual(
      expect.objectContaining({
        units: [
          {
            type,
            name,
            position: [1, 1],
          },
        ],
        logs: expect.arrayContaining([
          {
            text: `${type} ${name} cannot be created because the name is already taken`,
            level: 'warning',
          },
        ]),
      })
    )
  })
})