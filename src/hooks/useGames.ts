import useData from "./useData"
import { Genre } from "./useGenres"
import { Platform } from "./usePlatforms"

export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

export default function (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  )
}
