/* eslint-disable import/first */
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import RecipeCard from '../RecipeCard';

function RecipeList({ recipes }) {
    return (
        <Wrapper>
            { recipes.map(( recipe ) => (
                <RecipeCard
                    key={ recipe.uuid }
                    { ...recipe }
                />
            )) }
        </Wrapper>
    );
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf( PropTypes.object )
}

export default RecipeList;