import { describe, it, expect } from 'vitest'
import { rectangleStrategy } from '../rectangle'

describe('reactangle', () => {
  // given
  const rectangle = rectangleStrategy(10, 10)

  it('create vector', () => {
    // given
    const position = [1, 2]

    // when
    const vector = rectangle.createVector(...position)

    // then
    expect(vector).toEqual(position)
  })

  it.each([
    [[1]],
    [[1, 2, 3]]
  ])('should not create vector %s', (position) => {
    // when & then
    expect(() => rectangle.createVector(...position)).toThrow('Rectangle orientation requires 2 arguments')
  })

  it.each([
    [[1, 2], true],
    [[-1, 2], false],
    [[1, -2], false],
    [[-1, -2], false],
    [[10, 2], false],
    [[1, 10], false],
  ])('is within bounds %s %s', (position, expected) => {
    // when
    const result = rectangle.isWithinBounds(position)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    ['N', true],
    ['S', true],
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
    const result = rectangle.isDirection(direction)

    // then
    expect(result).toBe(expected)
  })

  it.each([
    [[1, 1], 'N', 1, [1, 2]],
    [[1, 1], 'S', 1, [1, 0]],
    [[1, 1], 'E', 1, [2, 1]],
    [[1, 1], 'W', 1, [0, 1]],
    [[1, 1], 'NE', 1, [2, 2]],
    [[1, 1], 'NW', 1, [0, 2]],
    [[1, 1], 'SE', 1, [2, 0]],
    [[1, 1], 'SW', 1, [0, 0]],
    [[1, 1], 'N', 2, [1, 3]],
    [[2, 3], 'S', 2, [2, 1]],
  ])('transform %s in %s %s -> %s', (position, direction, distance, expected) => {
    // when
    const result = rectangle.transform(position, direction, distance)

    // then
    expect(result).toEqual(expected)
  })
})