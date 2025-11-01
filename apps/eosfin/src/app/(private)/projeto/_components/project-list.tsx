'use client'

import { useLiveQuery } from '@tanstack/react-db'

import { projectsCollection } from '@/db/collections/projects'

export function ProjectList() {
  const { data: projects = [] } = useLiveQuery(function (query) {
    return query
      .from({ projects: projectsCollection })
      .select(({ projects }) => ({
        id: projects.id,
        title: projects.title,
        description: projects.description,
        clientName: projects.clientName,
        value: projects.value,
        category: projects.category,
        userId: projects.userId,
        createdAt: projects.createdAt,
        updatedAt: projects.updatedAt,
      }))
      .orderBy(({ projects }) => projects.createdAt, 'desc')
  })

  return (
    <ul className="space-y-4">
      {projects.length === 0 ? (
        <li className="border border-zinc-900 p-5 text-center text-sm text-zinc-600">
          Nenhum projeto criado ainda
        </li>
      ) : (
        projects.map(function (project) {
          return (
            <li
              key={project.id}
              className="group space-y-3 border border-zinc-900 p-5 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  PRJ-{project.id.slice(0, 8)}
                </span>
                <span className="text-xs text-zinc-700">
                  {new Date(project.createdAt).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-base text-zinc-300 transition-colors group-hover:text-white">
                {project.description}
              </p>
              <div className="flex items-center justify-between border-t border-zinc-900 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                    {project.clientName?.charAt(0).toUpperCase() || '?'}
                  </div>
                  <span className="text-sm text-zinc-600">
                    {project.clientName}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">
                    Categoria: {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    R$ {project.value.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </li>
          )
        })
      )}
    </ul>
  )
}
