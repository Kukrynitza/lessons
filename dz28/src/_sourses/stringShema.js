'use client'
import { check, maxLength, minLength, pipe, string } from 'valibot'

export default pipe(
  string(),
  minLength(3, 'The line must contain at least 3 characters'),
  maxLength(20, 'The line must contain a maximum 20 characters'),
  check((input) => !input.includes('-'), 'You mustn\'t use "-", use " " ')
)
