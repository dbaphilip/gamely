import usePlatforms, { Platform } from "../hooks/usePlatforms"

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

export default function ({ onSelectPlatform, selectedPlatform }: Props) {
  const { data } = usePlatforms()

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedPlatform?.name || "Platforms"}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {data.map((platform) => (
          <li key={platform.id}>
            <button
              onClick={() => onSelectPlatform(platform)}
              className="dropdown-item"
              type="button"
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
