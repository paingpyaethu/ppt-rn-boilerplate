import type { AxiosError } from 'axios'

export type ApiError = {
  status: number
  message: string
  code?: string
  details?: unknown
}

export const normalizeApiError = (err: unknown): ApiError => {
  const fallback: ApiError = { status: 0, message: 'Unknown error' }
  const axiosErr = err as AxiosError<any>
  if (!axiosErr?.isAxiosError) return fallback

  const status = axiosErr.response?.status ?? 0
  const data = axiosErr.response?.data

  return {
    status,
    message: data?.message ?? axiosErr.message ?? 'Request failed',
    code: data?.code,
    details: data,
  }
}
