import React  from 'react';

import './Playlists.scss';
import { RouteHeader } from '../../components'
import PlaylistItem from './PlaylistItem'

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => {

    return(

        <div className="playlists" data-testid="playlists">
            <div className="container">
                <RouteHeader categoryName={categoryName} path={path}/>
                <div className="playlists__content">
                    {data.length > 0 && data.map( item => {
                        return(
                            <PlaylistItem key={item.id} categoryId={categoryId} description={item.description} id={item.id} image={item.images[0].url} 
                                           name={item.name} path={path}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Playlists;

