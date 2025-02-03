import useGames from "../hooks/useGames"
import { Genre } from "../hooks/useGenres"
import { Platform } from "../hooks/usePlatforms"
import GameCard from "./GameCard"

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

export default function ({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)

  if (isLoading)
    return (
      <div className="row">
        <div className="col-1">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )

  return (
    <>
      {error && <div className="error">{error}</div>}
      {data.map((game) => (
        <div className="col-2 my-2" key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
    </>
  )
}
