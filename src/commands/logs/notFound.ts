import { Game } from '../../model'
import { Command } from '../../patterns'
import { error } from './error'

export const notFound = (name: string): Command<Game> => error(`Command ${name} not found`)