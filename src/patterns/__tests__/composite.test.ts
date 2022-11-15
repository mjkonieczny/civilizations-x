import { describe, it, expect, vi } from 'vitest'
import { Command, execute } from '../command'
import { compositeCommand } from '../composite'

describe('composite', () => {
  it.each([
    [0, 1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6],
  ])('should execute composite command', (a, b, c, d, e, expected) => {
    // given
    const compositeCommands: Command<number>[] = [
      vi.fn().mockReturnValue(c),
      vi.fn().mockReturnValue(d),
      vi.fn().mockReturnValue(e),
    ]

    const commands = [
      vi.fn().mockReturnValue(b),
      compositeCommand<number>(
        ...compositeCommands,
      ),
      vi.fn().mockReturnValue(expected),
    ]

    // when
    const result = execute(commands, a)

    // then
    expect(commands[0]).toHaveBeenCalledOnce()
    expect(commands[2]).toHaveBeenCalledOnce()

    expect(commands[0]).toHaveBeenCalledWith(a)
    expect(commands[2]).toHaveBeenCalledWith(e)

    expect(compositeCommands[0]).toHaveBeenCalledOnce()
    expect(compositeCommands[1]).toHaveBeenCalledOnce()
    expect(compositeCommands[2]).toHaveBeenCalledOnce()

    expect(compositeCommands[0]).toHaveBeenCalledWith(b)
    expect(compositeCommands[1]).toHaveBeenCalledWith(c)
    expect(compositeCommands[2]).toHaveBeenCalledWith(d)

    expect(result).toBe(expected)
  })
})