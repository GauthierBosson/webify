import * as z from 'zod'
import {
  pageSchema,
  sectionSchema,
  rowSchema,
  columnSchema,
  elementSchema,
} from './validation'

export type EdiorElement = z.infer<typeof elementSchema>

export type Column = z.infer<typeof columnSchema>

export type Row = z.infer<typeof rowSchema>

export type Section = z.infer<typeof sectionSchema>

export type Page = z.infer<typeof pageSchema>
