import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { pageSchema } from '@/lib/validation'

export default function Editor() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(pageSchema),
  })

  function onSubmit() {}

  return (
    <section>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </section>
  )
}
