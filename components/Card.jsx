import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {


    return (

        <div>
            <img src={`images/${props.song_card_cover_art}`} />
            <div>
                <h2>{props.song_card_song_title}</h2>
                <div>
                    <img src={album_icon} />
                    <p>{props.song_card_album_name}</p>
                </div>
                <div>
                    <img src={artist_icon} />
                    <p>{props.song_card_artist_name}</p>
                </div>
                <div>
                    <img src={genre_icon} />
                    <p>{props.song_card_genre_name}</p>
                </div>
            </div>
        </div>

    )
}