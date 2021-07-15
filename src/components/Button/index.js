import React from 'react'
import Proptypes from 'prop-types'
// Styles
import {Wrapper} from './Button.styles'

const Button = ({text, callBack}) => (
    <Wrapper type='button' onClick={callBack}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: Proptypes.string,
    callBack: Proptypes.func
}

export default Button
