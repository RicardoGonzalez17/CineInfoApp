const Seasons = ({ allSeasons }) => {
  const seasonGroups = allSeasons?.reduce((acumu, season) => {
    const existingSeason = acumu.find((group) => group.season === season.season)

    if (existingSeason) {
      existingSeason.episode.push(season)
    } else {
      acumu.push({ season: season.season, episode: [season] })
    }
    return acumu
  }, [])
  console.log(seasonGroups)
  return (
    <>
      <div className='accordion' id='accordionSeasons'>
        {seasonGroups?.map((seasonGroup) => (
          <div className='accordion-item' key={seasonGroup.season}>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#season-${seasonGroup.season}`}
                aria-expanded='true'
                aria-controls={`season-${seasonGroup.season}`}
              >
                Season {seasonGroup.season}
              </button>
            </h2>
            <div
              id={`season-${seasonGroup.season}`}
              className='accordion-collapse collapse'
              data-bs-parent='#accordionSeasons'
            >
              <div className='accordion-body'>
                {seasonGroup.episode.map((episode) => (
                  <div key={episode.id}>
                    <strong>Episode {episode.number}</strong> {episode.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Seasons
