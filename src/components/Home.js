import React from "react"

const Home = (props) => {

    const {songs} = props

    const {getSongs} = props

    const loaded = () => {
        {songs.map((song)=>{
            console.log(song.artist)
            return(
                <div>
                    <h1>Hello</h1>
                </div>
            )
        })}

    }
    

    return(
        <div>
            <h1>Songs Page</h1>
            <div>
                {songs.length > 0 ? loaded() : <h2>There are no songs!</h2>} 
            </div>
        </div>
    )
}

export default Home