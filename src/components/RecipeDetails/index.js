/* eslint-disable import/first */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import capitalize from 'lodash/capitalize';

import { Wrapper, SectionWrapper } from './styles';

function RecipeDetails({ recipes }) {
    const { recipeUuid } = useParams();
    const recipe = recipes[ recipeUuid ];

    if ( !recipe ) return false;

    return (
        <Wrapper>
            <h1>{ recipe.title }</h1>
            <div className="image">
                <img src={ recipe.images.full } alt={ recipe.title } />
            </div>

            <SectionWrapper className="time">
                <div>
                    <h4>{ recipe.prepTime + recipe.cookTime } mins</h4>
                    <span>TOTAL TIME</span>
                </div>
                <div>
                    <h4>{ recipe.prepTime } mins</h4>
                    <span>PREP TIME</span>
                </div>
                <div>
                    <h4>{ recipe.cookTime } mins</h4>
                    <span>COOK TIME</span>
                </div>
            </SectionWrapper>

            <SectionWrapper className="ingredients">
                <h2>INGREDIENTS</h2>
                { recipe.ingredients.map(( ingredient ) => (
                    <div key={ ingredient.uuid }>
                        <div className="column quantity">
                            <span>{ ingredient.amount }&nbsp;</span>
                            <span>{ ingredient.measurement }</span>
                        </div>
                        <div className="column name">{ capitalize( ingredient.name ) }</div>
                    </div>
                )) }
                <br />
                <span>
                    Yields: <b>{ recipe.servings } serving{ recipe.servings > 1 && 's' }</b>
                </span>
            </SectionWrapper>

            <h2>DIRECTIONS</h2>
            <ol>
                { recipe.directions.map(( direction, idx ) => (
                    <li key={ idx }>
                        { direction.instructions }
                        { direction.optional && (
                            <i>(optional)</i>
                        ) }
                    </li>
                )) }
            </ol>
        </Wrapper>
    );
}

RecipeDetails.propTypes = {
    recipes: PropTypes.object
}

RecipeDetails.defaultProps = {
    recipes: {}
}

export default RecipeDetails;