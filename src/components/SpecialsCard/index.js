/* eslint-disable import/first */
import React from 'react';

import { Wrapper } from './styles';

function SpecialsCard( props ) {
    return (
        <Wrapper>
            <h6>{ props.title }</h6>
            <div dangerouslySetInnerHTML={{
                __html: props.text
            }} />
        </Wrapper>
    );
}

export default SpecialsCard;