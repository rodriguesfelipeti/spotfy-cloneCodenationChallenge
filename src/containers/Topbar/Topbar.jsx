import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from '../../components';

import './Topbar.scss';

const Topbar = () => {
    const user = useSelector(state => state.user.name)
    const thumb = useSelector(state => state.user.thumb)

    return(
        <header className="topbar" data-testid="topbar">
            <div className="container">
                <Link to="/dashboard">
                    <Logo />
                </Link>
                <div className="user">
                    <span className="user__name">{user}</span>
                    <figure className="user__thumb"><img src={thumb}  alt="foto de perfil de Felipe Rodrigues" /></figure>
                </div>
            </div>
        </header>
        
    )
}


export default Topbar;
