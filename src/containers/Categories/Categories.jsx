import React  from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => {
    return(
        <div className="categories" data-testid="categories">
            <div className="container">
                <h3 className="categories__title">Categorias</h3>
                <div className="categories__content">
                    {isLoading && <Loading text="Carregando..." />}
                    {data.length > 0 && data.map( category => {
                        return(
                            <CategoryItem icon={category.icons[0]} id={category.id} key={category.id} name={category.name} url={url}/>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}

Categories.defaultProps = {
    isLoading: false,
}

Categories.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    url: PropTypes.string.isRequired,
}

export default Categories;

