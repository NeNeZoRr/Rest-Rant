const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                        <img style={{ width: 450, height: 450 }} className="Showpic" src={data.place.pic} alt={data.place.name} />
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <h3 className="inactive">Not Rated</h3>
                        <br />
                        <h2> Description</h2>
                        <h3> Located in {data.place.city}, {data.place.state}</h3>
                        <h3> Serving {data.place.cuisines} </h3>
                        <br />
                        <div className="actionbtn">
                            <div className="yellowbtn">
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>{` `}
                        </div>
                        <div className="redbtn">
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                <hr />
            </main>
        </Def>
    )
}

module.exports = show