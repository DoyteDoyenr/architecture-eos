import type { inferAsyncReturnType } from "@trpc/server";

interface CreateContextOptions {
  headers?: Headers;
}

export async function createContext({ headers }: CreateContextOptions) {
  return {
    headers,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
