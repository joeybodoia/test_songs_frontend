import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"

export const App = (props) => {

  // state to hold songs
  const [songs, setSongs] = React.useState([])

  // Fuction to make API call to get songs
  const getSongs = async () => {
    const response = await fetch("http://rails-songs-playlists-api.herokuapp.com/songs")
    // const response = await fetch("http://localhost:3000/songs")
    const data = await response.json()
    setSongs(data.reverse()) //reverse puts the created form data at the top of the page
  }

  // run getSongs function when the component loads
  React.useEffect(()=> {
    getSongs()
  }, [])

  



  return (
    <div>
      <Link to="/" className = "linkHome" >
          <a className="homeLink">Home</a>
      </Link>
      <h1>Playlist app</h1>
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} songs = {songs} getSongs={getSongs}/>} />
      </Switch>
    </div>
  )
};


