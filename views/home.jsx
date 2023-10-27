const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img style={{ width: 500, height: 600 }} src="images\cheesecake.jpg" alt="Berry CheeseCake" />
          <div>
            Photo by <a href="AUTHOR_LINK">Anna Tukhfatullina</a> On <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )

}


module.exports = home
