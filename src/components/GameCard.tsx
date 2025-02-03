import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImgUrl from "../services/getCroppedImgUrl"

interface Props {
  game: Game
}

export default function ({ game }: Props) {
  return (
    <div className="card" style={{ maxWidth: "14rem" }}>
      <img
        src={getCroppedImgUrl(game.background_image)}
        className="card-img-top"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-baseline">
          <h5 className="card-title">{game.name}</h5>
          <CriticScore score={game.metacritic} />
        </div>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </div>
    </div>
  )
}
