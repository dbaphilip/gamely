import useGenres, { Genre } from "../hooks/useGenres"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

export default function ({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres()

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )

  return (
    <ul className="genre-list">
      {data.map((genre) => (
        <li key={genre.id} className="d-flex mb-1">
          <img className="rounded" src={genre.image_background} />
          <a
            className={genre.id == selectedGenre?.id ? "display-6" : ""}
            onClick={() => onSelectGenre(genre)}
            href="#"
          >
            {genre.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
