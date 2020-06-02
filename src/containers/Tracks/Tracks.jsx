import React  from 'react';

import { RouteHeader, Loading } from '../../components'
import { Track } from '../../containers'
import './Tracks.scss';

const Tracks = ({ categoryName, data, isLoading, path }) => {
    return(
        <div className="tracks" data-testeid="tracks">
            <div className="container">
                <RouteHeader categoryName={categoryName} path={path}/>
                {isLoading && <Loading />}
                {data && data.map( (songs, index) => {
                    return(<Track key={index} track={songs.track}/>) 
                })}
            </div>
        </div>
        
    )
}

export default Tracks;

