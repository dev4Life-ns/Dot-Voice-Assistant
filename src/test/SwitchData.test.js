import { test, vi, expect } from 'vitest'
import { performNonMediaActions } from '../logic/speech_recognition/SwitchData'
import * as CommandData from '../logic/speech_recognition/CommandData'

// Mock the annyang library
vi.mock('annyang', () => {
  const original = vi.importActual( 'annyang' )
  return {
    ...original,
    default: {
      addCommands: vi.fn(),
      start: vi.fn(),
    }

  }
})

// Mock the functions from the CommandData module
vi.mock('../logic/speech_recognition/CommandData', () => ({
  dotStopListening: vi.fn(),
  dotStillActive: vi.fn(),
  dotTakeBreak: vi.fn(),
  currentTime: vi.fn(),
  scrollDownWindow: vi.fn(),
  scrollUpWindow: vi.fn(),
  openWindow: vi.fn(),
  closeWindow: vi.fn(),
  nonMediaDefaultResponse: vi.fn(),
}))

test('performNonMediaActions with "stop listening" command', () => {
  performNonMediaActions('stop listening')
  expect(CommandData.dotStopListening).toHaveBeenCalled()
})

test('performNonMediaActions with "are you there" command', () => {
  performNonMediaActions('are you there')
  expect(CommandData.dotStillActive).toHaveBeenCalled()
})

