import { describe, it, expect } from 'vitest'
import { hexagonStrategy } from '../hexagon'

describe('hexagon', () => {
  // given
  const hexagon = hexagonStrategy(10, 10)

  it('create vector', () => {
    // given
    const position = [1, 2]

    // when
    const vector = hexagon.createVector(...position)

    // then
    expect(vector).toEqual(position)
  })

  it.each([
    [[1]],
    [[1, 2, 3]]
  ])('should not create vector %s', (position) => {
    // when & then
    expect(() => hexagon.createVector(...position)).toThrow('Hexagon orientation requires 2 arguments')
  })

  it.each([
    [[1, 2], true],
    [[-1, 2], true],
    [[1, -2], true],
    [[-1, -2], true],
    [[10, 2], false],
    [[1, 10], false],
    [[-10, 2], false],
    [[1, -10], false],
  ])('is within bounds %s %s', (position, expected) => {
    // when
    const result = hexagon.isWithinBounds(position)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    ['N', false],
    ['S', false],
    ['E', true],
    ['W', true],
    ['NE', true],
    ['NW', true],
    ['SE', true],
    ['SW', true],
    ['NNE', false],
    ['NNW', false],
    ['123', false],
  ])('is direction %s %s', (direction, expected) => {
    // when
    const result = hexagon.isDirection(direction)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    [[1, 1], 'E', 1, [2, 1]],
    [[1, 1], 'W', 1, [0, 1]],
    [[1, 1], 'NE', 1, [2, 2]],
    [[1, 1], 'NW', 1, [0, 2]],
    [[1, 1], 'SE', 1, [2, 0]],
    [[1, 1], 'SW', 1, [0, 0]],
    [[1, 1], 'NE', 2, [3, 3]],
    [[2, 3], 'SE', 2, [4, 1]],
  ])('transform %s in %s %s -> %s', (position, direction, distance, expected) => {
    // when
    const result = hexagon.transform(position, direction, distance)

    // then
    expect(result).toEqual(expected)
  })
})