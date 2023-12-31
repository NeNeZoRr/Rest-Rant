const React = require('react')
const Def = require('../default')

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6" key={index} >
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img style={{ width: 300, height: 300 }} src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })

  return (
    <Def>
      <main>
        <div className="placestitle">
          <h1>Places to Rant or Rave About</h1>
          <div>
          </div>
          <div className="row">
            {placesFormatted}
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = index
