/* eslint-disable import/first */
import React from 'react';
import PropTypes from 'prop-types';;
import { Link, useLocation } from 'react-router-dom';

import { Wrapper, TitleWrapper, InfoWrapper } from './styles';

function RecipeCard({ uuid, title, images, servings, prepTime, cookTime }) {
    const { pathname } = useLocation();
    const isActive = new RegExp( uuid ).test( pathname );
    return (
        <Wrapper active={ isActive }>
            <Link to={ `/${uuid}` }>
                <TitleWrapper background={ images.medium }>
                    <span>
                        { title }
                    </span>
                </TitleWrapper>
                <InfoWrapper>
                    <div>
                        <i className="fa fa-clock-o" />
                        { prepTime + cookTime }mins
                    </div>
                    <div>
                        <i className="fa fa-cutlery" />
                        { servings }
                    </div>
                </InfoWrapper>
            </Link>
        </Wrapper>
    );
}

RecipeCard.propTypes = {
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
        full: PropTypes.string,
        medium: PropTypes.string,
        small: PropTypes.string,
    }).isRequired,
    servings: PropTypes.number.isRequired,
    prepTime: PropTypes.number.isRequired,
    cookTime: PropTypes.number.isRequired
}

export default RecipeCard;