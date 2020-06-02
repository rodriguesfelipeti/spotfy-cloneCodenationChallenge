import React, { useEffect } from 'react'

import { Switch , useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesFailed, getCategoriesRequest, getCategoriesSuccess, getUserFailed, getUserRequest, getUserSuccess, logout } from '../store/actions';
import { endpoints } from '../modules/endpoints'
import { request } from '../modules/request'

import PlaylistsRoute from './PlaylistsRoute'
import TracksRoute from './TracksRoute'
import { Topbar, PrivateRoute } from '../containers'
import { WelcomeBox } from '../components'
import { Categories , Dashboard } from '../containers/'
const { getCategories, getUserProfile,  } = endpoints;

const DashboardRoute = () => {
    const { auth, content, user } = useSelector(state => state);
    const { path, url } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        const requestOptions = { ...getUserProfile.options, headers: { 'Authorization': `Bearer ${auth.accessToken}` }}
        dispatch(getUserRequest());

        request(getUserProfile.url, requestOptions)
        .then(data => dispatch(getUserSuccess(data)))
        .catch(error => {
            if (error === 401) {
            dispatch(logout());

            return;
            }

            dispatch(getUserFailed(error));
        });

    }, [auth, dispatch]);


    useEffect(() => {
        const requestOptions = { ...getUserProfile.options, headers: { 'Authorization': `Bearer ${auth.accessToken}` }}
        dispatch(getCategoriesRequest())
        
        request(getCategories.url, requestOptions)
        .then(data => dispatch(getCategoriesSuccess(data)))
        .catch(error => {
            if (error === 401) {
                dispatch(logout());
                
                return;
            }
            
            dispatch(getCategoriesFailed(error));
        });
    }, [auth, dispatch])
    
    return(
        <Dashboard>
            <Topbar />
            <Switch>
                <PrivateRoute exact path={path}>
                    <WelcomeBox name={user.name}/>
                    <Categories isLoading={content.status === 'running' && content.categories.length === 0} data={content.categories} url={url}/>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/:categoryId`}>
                    <PlaylistsRoute path={path} />
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
                    <TracksRoute path={path} />
                </PrivateRoute>

            </Switch>
        </Dashboard>
    )
}

export default DashboardRoute