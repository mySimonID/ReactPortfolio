import React from 'react'


const Heading = () => {


  return (

    <div className="jumbotron jumbotron-fluid"
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/img/HorseGuards.jpg)`
    // backgroundSize:`cover`, 
    // backgroundPosition:`0 50%`
    }}
    >
      <div className="container">
        <h1 className="display-4"><a className="links" href={process.env.PUBLIC_URL + '/'}>Simon Joyce</a></h1>
        <h2 className="lead">project manager / software engineer - portfolio</h2>
      </div>
    </div>

  )
}


export default Heading
