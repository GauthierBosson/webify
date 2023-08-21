'use client'

import { useRef, useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { pageSchema } from '@/lib/validation'

export default function Editor() {
  const formRef = useRef<HTMLFormElement>(null)
  const { register, handleSubmit, control } = useForm({
    //resolver: zodResolver(pageSchema),
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'section',
  })

  const onSubmit = (data) => {
    return console.log(data)
  }

  const onInvalid = (errors) => console.error(errors)

  return (
    <section>
      <div>
        <Button onClick={() => append({ value: 'sldfn' })}>Add</Button>
      </div>
      <form ref={formRef}>
        {fields.map((field, index) => (
          <input
            key={field.id}
            type='hidden'
            {...register(`section.${index}`)}
          />
        ))}
      </form>
      <Button onClick={handleSubmit(onSubmit, onInvalid)} type='submit'>
        Save
      </Button>
    </section>
  )
}
