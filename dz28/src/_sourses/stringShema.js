'use client'
import { maxLength, minLength, pipe, string } from 'valibot'

export default pipe(
  string(),
  minLength(3, 'The line must contain at least 3 characters'),
  maxLength(20, 'The line must contain a maximum 20 characters'),
  (input) => {
    if (input.includes('-')) {
      throw new Error('The line must not contain a hyphen (-)')
    }

    return input
  }
)
