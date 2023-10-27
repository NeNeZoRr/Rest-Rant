const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img style={{ width: 700, height: 450 }} src="images\Streching_Cat.jpg" alt="Orange Streching Cat" />
          <div>
            Photo by <a href="AUTHOR_LINK">Timo Volz</a> On <a href="PEXELS_LINK">Pexels</a>
          </div>
        </div>
            </main>
        </Def>
    )
}


module.exports = error404
