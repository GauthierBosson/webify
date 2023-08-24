import * as z from 'zod'
import * as DOMPurify from 'dompurify'

export const styleSchema = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .optional()

export const elementSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().max(255),
    styles: z.array(styleSchema),
  })
  .optional()

export const columnSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().max(255),
    styles: z.array(styleSchema),
    elements: z.array(elementSchema),
  })
  .optional()

export const rowSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().max(255),
    styles: z.array(styleSchema),
    columns: z.array(columnSchema),
  })
  .optional()

export const sectionSchema = z
  .object({
    id: z.string().optional(),
    type: z.enum(['header', 'main', 'aside', 'footer']),
    name: z.string().max(255),
    styles: z.array(styleSchema),
    rows: z.array(rowSchema),
  })
  .optional()

export const pageSchema = z.object({
  id: z.string(),
  name: z.string().max(255),
  body: z.string().transform((val) => DOMPurify.sanitize(val)),
})

export const DomElementSchema = z.object({
  id: z.string(),
  type: z.string(),
  parent: z.string().uuid().optional(),
  children: z.array(z.string().uuid()).optional(),
})
