import { describe, it, expect } from 'vitest'
import { cubeStrategy } from '../cube'

describe('cube', () => {
  // given
  const cube = cubeStrategy(10, 10, 10)

  it('create vector', () => {
    // given
    const position = [1, 2, 3]

    // when
    const vector = cube.createVector(...position)

    // then
    expect(vector).toEqual(position)
  })

  it.each([
    [[1]],
    [[1, 2]],
    [[1, 2, 3, 4]]
  ])('should not create vector %s', (position) => {
    // when & then
    expect(() => cube.createVector(...position)).toThrow('Cube orientation requires 3 arguments')
  })

  it.each([
    [[1, 2, 3], true],
    [[-1, 2, 3], false],
    [[1, -2, 3], false],
    [[1, 2, -3], false],
    [[-1, -2, 3], false],
    [[-1, 2, -3], false],
    [[1, -2, -3], false],
    [[-1, -2, -3], false],
    [[10, 2, 3], false],
    [[1, 10, 3], false],
    [[1, 2, 10], false],
  ])('is within bounds %s %s', (position, expected) => {
    // when
    const result = cube.isWithinBounds(position)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    ['N', true],
    ['S', true],
    ['E', true],
    ['W', true],
    ['U', true],
    ['D', true],
    ['NE', true],
    ['NW', true],
    ['SE', true],
    ['SW', true],
    ['NU', true],
    ['ND', true],
    ['SU', true],
    ['SD', true],
    ['EU', true],
    ['ED', true],
    ['WU', true],
    ['WD', true],
    ['NEU', true],
    ['NED', true],
    ['NWU', true],
    ['NWD', true],
    ['SEU', true],
    ['SED', true],
    ['SWU', true],
    ['SWD', true],
    ['NNE', false],
    ['NNW', false],
    ['123', false],
  ])('is direction %s %s', (direction, expected) => {
    // when
    const result = cube.isDirection(direction)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    [[1, 1, 1], 'N', 1, [1, 2, 1]],
    [[1, 1, 1], 'S', 1, [1, 0, 1]],
    [[1, 1, 1], 'E', 1, [2, 1, 1]],
    [[1, 1, 1], 'W', 1, [0, 1, 1]],
    [[1, 1, 1], 'U', 1, [1, 1, 2]],
    [[1, 1, 1], 'D', 1, [1, 1, 0]],
    [[1, 1, 1], 'NE', 1, [2, 2, 1]],
    [[1, 1, 1], 'NW', 1, [0, 2, 1]],
    [[1, 1, 1], 'SE', 1, [2, 0, 1]],
    [[1, 1, 1], 'SW', 1, [0, 0, 1]],
    [[1, 1, 1], 'NU', 1, [1, 2, 2]],
    [[1, 1, 1], 'ND', 1, [1, 2, 0]],
    [[1, 1, 1], 'SU', 1, [1, 0, 2]],
    [[1, 1, 1], 'SD', 1, [1, 0, 0]],
    [[1, 1, 1], 'EU', 1, [2, 1, 2]],
    [[1, 1, 1], 'ED', 1, [2, 1, 0]],
    [[1, 1, 1], 'WU', 1, [0, 1, 2]],
    [[1, 1, 1], 'WD', 1, [0, 1, 0]],
    [[1, 1, 1], 'NEU', 1, [2, 2, 2]],
    [[1, 1, 1], 'NED', 1, [2, 2, 0]],
    [[1, 1, 1], 'NWU', 1, [0, 2, 2]],
    [[1, 1, 1], 'NWD', 1, [0, 2, 0]],
    [[1, 1, 1], 'SEU', 1, [2, 0, 2]],
    [[1, 1, 1], 'SED', 1, [2, 0, 0]],
    [[1, 1, 1], 'SWU', 1, [0, 0, 2]],
    [[1, 1, 1], 'SWD', 1, [0, 0, 0]],
    [[1, 2, 3], 'N', 1, [1, 3, 3]],
    [[1, 2, 3], 'S', 1, [1, 1, 3]],
    [[1, 2, 3], 'NEU', 3, [4, 5, 6]],
  ])('transform %s in %s %s -> %s', (position, direction, distance, expected) => {
    // when
    const result = cube.transform(position, direction, distance)

    // then
    expect(result).toEqual(expected)
  })
})