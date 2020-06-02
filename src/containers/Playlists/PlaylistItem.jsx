import React  from 'react';
import { Link } from 'react-router-dom'
import Ink from 'react-ink'

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => {

    return(
        <div className="playlists__item" data-testid="playlist">
            <Link className="playlists__item__link" 
                  style={{backgroundImage: `url(${image})`}}
                  title={name}
                  to={`${path}/${categoryId}/${id}`}>
                <Ink />
            </Link>
            <p className="playlists__item__description"><strong>{name}</strong>{description}</p>
        </div>
    )
}

export default PlaylistItem;
