import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {

    return (
        <div>
            <Card 
                song_card_cover_art = "track_8_song_art.png"
                song_card_song_title = "RunWay Remix"
                song_card_album_name = "My Beautiful Dark Twisted Fantasy"
                song_card_artist_name = "Kanye West"
                song_card_genre_name = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

