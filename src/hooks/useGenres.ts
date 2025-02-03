import useData from "./useData"

export interface Genre {
  id: number
  name: string
  image_background: string
}

export default function () {
  return useData<Genre>("/genres")
}
