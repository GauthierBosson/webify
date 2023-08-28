import * as z from 'zod'
import {
  pageSchema,
  newPageSchema,
  sectionSchema,
  rowSchema,
  columnSchema,
  elementSchema,
  DomElementSchema
} from './validation'

export type EdiorElement = z.infer<typeof elementSchema>

export type Column = z.infer<typeof columnSchema>

export type Row = z.infer<typeof rowSchema>

export type Section = z.infer<typeof sectionSchema>

export type Page = z.infer<typeof pageSchema>

export type NewPage = z.infer<typeof newPageSchema>

export type DomElement = z.infer<typeof DomElementSchema>
