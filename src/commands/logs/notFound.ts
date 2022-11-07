import { Command } from '../../model'
import { errorCommandFactory } from './error'

export const notFoundCommandFactory = (name: string): Command => errorCommandFactory(`Command ${name} not found`)