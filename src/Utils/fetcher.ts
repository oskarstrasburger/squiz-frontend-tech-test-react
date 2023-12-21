import { QueryFunctionContext } from "@tanstack/react-query";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default async function fetcher({ queryKey, signal }: QueryFunctionContext) {
  const url = new URL(queryKey.join('/'), BACKEND_URL);

  const response = await fetch(url, {
    signal,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

type QueryKeyWithIds = [string, Array<string | number>];

export function queryFnWithIds<R>({ queryKey: [entity, ids], signal, meta }: QueryFunctionContext): R | Promise<R> {
  const params = (ids as QueryKeyWithIds)
    .map(id => `id=${id}`)
    .join('&')
    .replace(/^(.+?)/, '?$1');

  return fetcher({
    queryKey: [entity, params],
    signal,
    meta,
  });
}
