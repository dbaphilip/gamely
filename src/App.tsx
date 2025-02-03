import { useState } from "react"

import "./App.css"
import GenresList from "./components/GenresList"
import GameGrid from "./components/GameGrid"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"

export default function () {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )

  return (
    <div className="container-fluid">
      {/* Nav */}
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-botto">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Gamely</span>
        </a>

        <ul className="nav nav-pills">
          {/* <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
      {/* ENd Nav */}

      {/* ROW */}
      <div className="row">
        {/* Aside */}
        <aside className="col-3 d-none d-lg-block">
          <div className="nav">
            <GenresList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </div>
        </aside>
        {/* END Aside */}

        {/* Main */}
        <div className="col-lg-9 col-12">
          <div className="row">
            <div className="col-12 mb-3">
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              />
            </div>
          </div>

          <div className="row">
            <GameGrid
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </div>
        </div>
        {/* END Main */}
      </div>
      {/* ENd ROW */}
    </div>
  )
}
