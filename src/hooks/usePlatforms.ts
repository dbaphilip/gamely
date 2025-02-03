import useData from "./useData"
import { Genre } from "./useGenres"

export interface Platform {
  id: number
  name: string
  slug: string
}

export default function () {
  return useData<Platform>("/platforms/lists/parents")
}
