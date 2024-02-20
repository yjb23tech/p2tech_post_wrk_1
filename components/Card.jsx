import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {


    return (

        <div className="song-card">
            <img src={`images/${props.song_card_cover_art}`} className="song-card-song-cover-art"/>
            <div className="song-card-song-contents">
                <h2 className="song-card-song-title">{props.song_card_song_title}</h2>
                <div className="info-details">
                    <img src={album_icon} />
                    <p>{props.song_card_album_name}</p>
                </div>
                <div className="info-details">
                    <img src={artist_icon} />
                    <p>{props.song_card_artist_name}</p>
                </div>
                <div className="info-details">
                    <img src={genre_icon} />
                    <p>{props.song_card_genre_name}</p>
                </div>
            </div>
        </div>

    )
}

export default Card; 