import { describe, expect, it, vi } from 'vitest'
import { execute } from '..'

describe('command', () => {
  it.each([
    [ 0, 1, 2, 3 ],
    [ 1, 2, 3, 4 ],
  ])('should execute commands %s %s %s %s', (x, y, z, expected) => {
    // given
    const commands = [
      vi.fn().mockReturnValue(y),
      vi.fn().mockReturnValue(z),
      vi.fn().mockReturnValue(expected),
    ]

    // when
    const result = execute<number>(commands, x)

    // then
    expect(commands[0]).toHaveBeenCalledOnce()
    expect(commands[1]).toHaveBeenCalledOnce()
    expect(commands[2]).toHaveBeenCalledOnce()

    expect(commands[0]).toHaveBeenCalledWith(x)
    expect(commands[1]).toHaveBeenCalledWith(y)
    expect(commands[2]).toHaveBeenCalledWith(z)

    expect(result).toBe(expected)
  })
})