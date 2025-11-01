'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ClientOnly } from '@/components/client-only'
import { trpc } from '@/lib/trpc'

import { ProjectList } from './_components/project-list'

const createProjectSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  clientName: z.string().min(1, 'Nome do cliente é obrigatório'),
  value: z.string().min(1, 'Valor é obrigatório'),
  category: z.string().min(1, 'Categoria é obrigatória'),
})

type CreateProjectForm = z.infer<typeof createProjectSchema>

export default function ProjetoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProjectForm>({
    resolver: zodResolver(createProjectSchema),
  })

  const createProject = trpc.projects.create.useMutation({
    onSuccess: function () {
      reset()
    },
    onError: function (error) {
      alert(`Erro ao criar projeto: ${error.message}`)
    },
  })

  function onSubmit(data: CreateProjectForm) {
    createProject.mutate({
      ...data,
      value: parseFloat(data.value),
    })
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Projetos</h1>
        <p className="text-sm text-zinc-600">
          Gerencie seus projetos financeiros
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-end gap-3"
      >
        <div className="w-full space-y-1">
          <textarea
            {...register('description')}
            placeholder="Descreva o projeto..."
            className="w-full resize-y border border-zinc-900 bg-black p-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white"
            rows={3}
          />
          {errors.description && (
            <p className="text-xs text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="grid w-full grid-cols-2 gap-3">
          <div className="space-y-1">
            <input
              {...register('clientName')}
              type="text"
              placeholder="Nome do cliente"
              className="w-full border border-zinc-900 bg-black p-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white"
            />
            {errors.clientName && (
              <p className="text-xs text-red-500">
                {errors.clientName.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <input
              {...register('value')}
              type="text"
              placeholder="Valor (R$)"
              className="w-full border border-zinc-900 bg-black p-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white"
            />
            {errors.value && (
              <p className="text-xs text-red-500">{errors.value.message}</p>
            )}
          </div>
        </div>

        <div className="w-full space-y-1">
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria do projeto"
            className="w-full border border-zinc-900 bg-black p-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white"
          />
          {errors.category && (
            <p className="text-xs text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div className="w-full space-y-1">
          <input
            {...register('title')}
            type="text"
            placeholder="Título do projeto"
            className="w-full border border-zinc-900 bg-black p-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white"
          />
          {errors.title && (
            <p className="text-xs text-red-500">{errors.title.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={createProject.isPending}
          className="h-9 cursor-pointer bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {createProject.isPending ? 'Criando...' : 'Criar projeto'}
        </button>
      </form>

      <div className="h-px w-full bg-zinc-900" />

      <ClientOnly>
        <ProjectList />
      </ClientOnly>
    </div>
  )
}
