import { useEffect, useState } from "react"
import { AxiosRequestConfig, CanceledError } from "axios"

import apiClient from "../services/apiClient"

interface FetchDataRes<T> {
  count: number
  results: T[]
}

export default function <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(
    () => {
      const controller = new AbortController()

      setLoading(true)
      apiClient
        .get<FetchDataRes<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setData(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
        })
        .finally(() => setLoading(false))

      return () => controller.abort()
    },
    deps ? [...deps] : []
  )

  return { data, error, isLoading }
}
