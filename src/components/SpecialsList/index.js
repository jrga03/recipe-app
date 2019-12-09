/* eslint-disable import/first */
import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

import { Wrapper, StyledList } from './styles';
import SpecialsCard from '../SpecialsCard';

function SpecialsList({ type, specials }) {
    return (
        <Wrapper>
            <h5>{ capitalize( type ) }</h5>
            <StyledList>
                { specials.map(( special ) => (
                    <SpecialsCard
                        key={ special.uuid }
                        { ...special }
                    />
                )) }
            </StyledList>
        </Wrapper>
    );
}

SpecialsList.propTypes = {
    type: PropTypes.string.isRequired,
    specials: PropTypes.arrayOf( PropTypes.object )
}

SpecialsList.defaultProps = {
    specials: []
}

export default SpecialsList;